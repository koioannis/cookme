const { Service, Container } = require('typedi');
const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const objectMapper = require('object-mapper');
const randToken = require('rand-token');
const dateFns = require('date-fns');
const UserDTO = require('../mapping/user/UserDTO');
const config = require('../config');

Service();
class AuthService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.userDetailsModel = Container.get('userDetailsModel');
    this.refreshTokenModel = Container.get('refreshTokenModel');
  }

  async Register(userData) {
    try {
      // Check if user exists
      const userAlreadyInDb = await this.checkIfUserAlreadyInDb({
        username: userData.username,
        email: userData.email,
      });

      if (userAlreadyInDb) {
        const error = new Error('User already exists');
        error.status = 409;
        throw error;
      }

      // Created hashed password
      const salt = randomBytes(32);
      this.logger.silly('Hashing password');
      const hashedPassword = await argon2.hash(userData.password, salt);
      this.logger.silly('Creating user db record');

      // Save data to DB
      let userDetailsRecord = null;
      if (userData.userDetails) {
        userDetailsRecord = await this.userDetailsModel.create({
          ...userData.userDetails,
        });
      }
      const userRecord = await this.userModel.create({
        username: userData.username,
        email: userData.email,
        salt: salt.toString('hex'),
        userDetails: userDetailsRecord,
        password: hashedPassword,
        isAdmin: false,
      });

      if (!userRecord) {
        const error = new Error('Invalid Password or Email');
        error.status = 401;
        throw error;
      }

      // Generate accessToken & refreshToken
      const { accessToken, jwtid } = this.generateToken(userRecord);
      const refreshToken = this.generateRefreshToken(userRecord, jwtid);
      const refreshTokenRecord = await this.refreshTokenModel.create(refreshToken);
      await refreshTokenRecord.save();
      await userRecord.refreshTokens.push(refreshTokenRecord);
      await userRecord.save();

      const user = objectMapper(userRecord, UserDTO);

      return {
        data: {
          username: user.username,
          email: user.email,
          userDetails: user.userDetails,
        },
        accessToken,
        refreshToken: refreshToken.token,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async Login(userData) {
    const userRecord = await this.userModel.findOne({ email: userData.email });

    if (!userRecord) {
      const error = new Error('user not registered');
      error.status = 404;
      throw error;
    }

    this.logger.silly('Checking password');

    const validPassword = await argon2.verify(userRecord.password, userData.password);

    if (validPassword) {
      this.logger.silly('Password is valid');
      this.logger.silly('Generating JWT');

      const { accessToken, jwtid } = this.generateToken(userRecord);
      const refreshToken = this.generateRefreshToken(userRecord, jwtid);
      const refreshTokenRecord = await this.refreshTokenModel.create(refreshToken);
      await refreshTokenRecord.save();
      await userRecord.refreshTokens.push(refreshTokenRecord);
      await userRecord.save();

      let user = userRecord.toObject();
      user = objectMapper(user, UserDTO);

      return {
        data: {
          username: user.username,
          email: user.email,
          userDetails: user.userDetails,
        },
        accessToken,
        refreshToken: refreshToken.token,
      };
    }

    const error = new Error('Invalid Password or Email');
    error.status = 401;
    throw error;
  }

  Logout(res) {
    // delete the refresh token from user's cookies && db
    this.logger.debug('Deleting cookie');
    res.clearCookie('refreshToken');
  }

  async RefreshToken({ oldAccessToken, oldRefreshToken }) {
    jwt.verify(oldAccessToken, config.jwtSecret, (error) => {
      if (!error || error.message !== 'jwt expired') {
        const err = new Error(error || 'jwt is not expired');
        err.status = 401;
        throw err;
      }
    });
    const decodedData = jwt.decode(oldAccessToken);
    const { userId, jti } = decodedData;

    let oldRefreshTokenId;
    let refreshTokenError;
    this.logger.debug(oldRefreshToken);
    await this.refreshTokenModel.findOneAndDelete({ token: oldRefreshToken },
      (error, refreshToken) => {
        try {
          if (!refreshToken) throw new Error('Did not find the refresh token in database');
          if (!refreshToken.used) throw new Error('Token has not been user');
          if (refreshToken.invalidated) throw new Error('Token has been invalidated');
          if (dateFns.isPast(refreshToken.expireDate)) throw new Error('Refresh Token has expired');
          if (jti !== refreshToken.jwtId) throw new Error('Jti of access token doesn\'t match the refresh token\'s jti');
          if (userId !== String(refreshToken.user)) throw new Error('User on JWT must match the user on refresh token');
          oldRefreshTokenId = refreshToken._id;
        } catch (err) {
          refreshTokenError = err;
        }
      });
    if (refreshTokenError) {
      refreshTokenError.status = 401;
      throw refreshTokenError;
    }

    this.logger.debug(oldRefreshTokenId);
    const userRecord = await this.userModel.findOne({ _id: userId }, (error, user) => {
      if (error) throw error;
      user.refreshTokens.pull({ _id: oldRefreshTokenId });
      user.save();
    });

    const { accessToken, jwtid } = this.generateToken(userRecord);
    const refreshToken = this.generateRefreshToken(userRecord, jwtid);
    const refreshTokenRecord = await this.refreshTokenModel.create(refreshToken);
    await refreshTokenRecord.save();
    await userRecord.refreshTokens.push(refreshTokenRecord);
    await userRecord.save();

    return { refreshToken: refreshToken.token, accessToken };
  }

  async checkIfUserAlreadyInDb(user) {
    let found = false;
    await this.userModel.findOne({
      $or: [
        { username: user.username },
        { email: user.email },
      ],
    }, (error, userFound) => {
      if (error) this.logger.error('Error in searching if user exists %o', error);
      if (userFound) found = true;
    });

    return found;
  }

  generateRefreshToken(user, jwtId) {
    this.logger.silly(`Creating RefreshToken for userID: ${user._id}`);
    const token = randToken.uid(256);
    const expireDate = dateFns.addDays(new Date(), 10);
    return {
      token,
      expireDate,
      jwtId,
      used: true,
      invalidated: false,
      user,
    };
  }

  generateToken(user) {
    // eslint-disable-next-line no-underscore-dangle
    this.logger.silly(`Sign JWT for userID: ${user._id}`);
    const jwtid = uuid.v4();
    const accessToken = jwt.sign(
      {
        // eslint-disable-next-line no-underscore-dangle
        userId: user._id,
        isAdmin: user.isAdmin,
      },
      config.jwtSecret,
      {
        expiresIn: '2h',
        jwtid,
      },
    );
    return { accessToken, jwtid };
  }
}

module.exports = AuthService;

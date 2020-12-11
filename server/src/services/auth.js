const { Service, Container } = require('typedi');
const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const objectMapper = require('object-mapper');
const randToken = require('rand-token');
const addDays = require('date-fns/addDays');

const { EventDispatcher } = require('../decorators/eventDispatcher');
const UserDTO = require('../mapping/user/UserDTO');
const config = require('../config');

Service();
class AuthService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.userDetailsModel = Container.get('userDetailsModel');
    this.refreshTokenModel = Container.get('refreshTokenModel');
    this.eventDispatcher = EventDispatcher;
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
        error.status = 200;
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
      });

      if (!userRecord) {
        throw new Error('user cannot be created');
      }

      // Generate accessToken & refreshToken
      const { accessToken, jwtid } = this.generateToken(userRecord);
      const refreshToken = this.generateRefreshToken(userRecord, jwtid);
      const refreshTokenRecord = await this.refreshTokenModel.create(refreshToken);
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
      throw new Error('user not registered');
    }

    this.logger.silly('Checking password');

    const validPassword = await argon2.verify(userRecord.password, userData.password);

    if (validPassword) {
      this.logger.silly('Password is valid');
      this.logger.silly('Generating JWT');

      const { accessToken, jwtid } = this.generateToken(userRecord);
      const refreshToken = this.generateRefreshToken(userRecord, jwtid);
      const refreshTokenRecord = await this.refreshTokenModel.create(refreshToken);
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

    throw new Error('Invalid Password');
  }

  Logout(res) {
    // delete the refresh token from user's cookies && db
    this.logger.debug('Deleting cookie');
    res.clearCookie('refreshToken');
  }

  async RefreshToken({ oldAccessToken, oldRefreshToken }) {
    jwt.verify(oldAccessToken, config.jwtSecret, (error) => {
      if (!error || error.message !== 'jwt expired') {
        const err = new Error('Jwt is not expired' || error.message);
        err.status = 400;
        throw error;
      }
    });

    const decodedData = jwt.decode(oldAccessToken);
    this.logger.debug('%o', decodedData);
    const { userId, jti } = decodedData;
    this.logger.debug(userId);
    this.logger.debug(jti);
    return { refreshToken: 'test', accessToken: 'test' };
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

  generateRefreshToken(user, jti) {
    this.logger.silly(`Creating RefreshToken for userID: ${user._id}`);
    const token = randToken.uid(256);
    const expireDate = addDays(new Date(), 10);
    return {
      token,
      expireDate,
      jwtId: jti,
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
        role: user.role,
      },
      config.jwtSecret,
      {
        expiresIn: '30s',
        jwtid,
      },
    );
    return { accessToken, jwtid };
  }
}

module.exports = AuthService;

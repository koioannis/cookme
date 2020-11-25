const { Service, Container } = require('typedi');
const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const objectMapper = require('object-mapper');

const { EventDispatcher } = require('../decorators/eventDispatcher');
const UserDTO = require('../mapping/user/UserDTO');
const config = require('../config');

Service();
class AuthService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.userDetailsModel = Container.get('userDetailsModel');
    this.eventDispatcher = EventDispatcher;
  }

  async SignUp(userData) {
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

      // Generate jwt and send the response
      this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);

      if (!userRecord) {
        throw new Error('user cannot be created');
      }

      const user = objectMapper(userRecord, UserDTO);
      this.logger.info('checked');

      return {
        data: {
          username: user.username,
          email: user.email,
          userDetails: user.userDetails,
        },
        token,
      };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  async SignIn(userData) {
    const userRecord = await this.userModel.findOne({ email: userData.email });

    if (!userRecord) {
      throw new Error('user not registered');
    }

    this.logger.silly('Checking password');

    const validPassword = await argon2.verify(userRecord.password, userData.password);

    if (validPassword) {
      this.logger.silly('Password is valid');
      this.logger.silly('Generating JWT');

      const token = this.generateToken(userRecord);

      let user = userRecord.toObject();
      user = objectMapper(user, UserDTO);

      return {
        data: {
          email: user.email,
        },
        token,
      };
    }

    throw new Error('Invalid Password');
  }

  SignOut(res) {
    this.logger.debug('Deleting cookie');
    res.clearCookie('authcookie');
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

  generateToken(user) {
    // eslint-disable-next-line no-underscore-dangle
    this.logger.silly(`Sign JWT for userID: ${user._id}`);
    return jwt.sign(
      {
        // eslint-disable-next-line no-underscore-dangle
        id: user._id,
        role: user.role,
      },
      config.jwtSecret,
      {
        expiresIn: '3h',
      },
    );
  }
}

module.exports = AuthService;

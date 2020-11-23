const { Service, Container } = require('typedi');
const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');
const { EventDispatcher } = require('../decorators/eventDispatcher');
const objectMapper = require('object-mapper');

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

  async SignUp(User) {
    try {

      // Check if user exists
      const userAlreadyInDb = await this.checkIfUserAlreadyInDb({
        username: User.username,
        email: User.email,
      });

      if (userAlreadyInDb) return { message: 'Username or Email already exists' };

      // Create pwd
      const salt = randomBytes(32);
      this.logger.silly('Hashing password');
      const hashedPassword = await argon2.hash(User.password, salt);
      this.logger.silly('Creating user db record');

      // Integrate with DB
      let userDetailsRecord = null;
      if (User.userDetails) {
        userDetailsRecord = await this.userDetailsModel.create({
          ...User.userDetails,
        });
      }
      const userRecord = await this.userModel.create({
        username: User.username,
        email: User.email,
        salt: salt.toString('hex'),
        userDetails: userDetailsRecord,
        password: hashedPassword,
      });

      // JWT
      this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);

      if (!userRecord) {
        throw new Error('User cannot be created');
      }

      this.logger.debug(JSON.stringify(userRecord));
      const user = objectMapper(userRecord, UserDTO);
      return { user, token };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
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
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);

    // eslint-disable-next-line no-underscore-dangle
    this.logger.silly(`Sign JWT for userID: ${user._id}`);
    return jwt.sign(
      {
        // eslint-disable-next-line no-underscore-dangle
        _id: user._id,
        role: user.role,
        name: user.name,
        exp: exp.getTime() / 1000,
      },
      config.jwtSecret,
    );
  }
}

module.exports = AuthService;

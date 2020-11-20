const { Service, Container } = require('typedi');
const { randomBytes } = require('crypto');
const argon2 = require('argon2');
const jwt = require('jsonwebtoken');

const { EventDispatcher } = require('../decorators/eventDispatcher');
const config = require('../config');

Service();
class AuthService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.userInfoModel = Container.get('userInfoModel');
    this.eventDispatcher = EventDispatcher;
  }

  async SignUp(userDTO) {
    try {
      const userAlreadyInDb = await this.checkIfUserAlreadyInDb({
        username: userDTO.username,
        email: userDTO.email,
      });

      if (userAlreadyInDb) return { message: 'Username or Email already exists' };

      const salt = randomBytes(32);
      this.logger.silly('Hashing password');

      const hashedPassword = await argon2.hash(userDTO.password, { salt });

      this.logger.silly('Creating user db record');

      const userRecord = await this.userModel.create({
        username: userDTO.username,
        email: userDTO.email,
        salt: salt.toString('hex'),
        password: hashedPassword,
      });

      this.logger.silly('Generating JWT');
      const token = this.generateToken(userRecord);

      if (!userRecord) {
        throw new Error('User cannot be created');
      }

      /* @TODO
        Create a mapper layer for the DTO
      */
      const user = userRecord.toObject();
      Reflect.deleteProperty(user, 'password');
      Reflect.deleteProperty(user, 'salt');
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
    }, (error, user) => {
      if (error) this.logger.error('Error in searching if user exists %o', error);
      if (user) found = true;
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

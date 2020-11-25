const { Service, Container } = require('typedi');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const { randomBytes } = require('crypto');
const config = require('../config');

Service();
class AccountService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
  }

  async resetPassword(data) {
    const salt = randomBytes(32);
    this.logger.silly('Hashing password');
    const hashedPassword = await argon2.hash(data.newPassword, salt);

    const filter = { _id: data.userId };
    const update = { password: hashedPassword, salt };
    this.userModel.findOneAndUpdate(filter, update, (error, result) => {
      if (error) throw error;
    });

    return { message: 'Password successfully changed' };
  }

  async forgotPassword(email) {
    const user = await this.userModel.findOne({ email });
    try {
      this.logger.info('user: %o', user);
      if (!user) {
        return;
      }

      const nodemailer = Container.get('nodemailer');

      this.logger.info('Sending email');
      nodemailer.sendEmail({
        to: user.email,
        username: user.username,
        subject: 'Password Reset',
        template: '../templates/forgot-password-email.html',
        /* @TODO
          Generate the required url for the reset password
          Requires front end migration
        */
        // eslint-disable-next-line no-underscore-dangle
        url: this.generateJtwResetToken(user._id),
      }, (error) => {
        if (error) throw error;
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  generateJtwResetToken(userId) {
    // eslint-disable-next-line no-underscore-dangle
    this.logger.silly(`Sign JWT Password Reset Token for user: ${userId}`);
    return jwt.sign(
      {
        id: userId,
      },
      config.jwtResetPasswordSecret,
      {
        expiresIn: '10m',
      },
    );
  }
}

module.exports = AccountService;

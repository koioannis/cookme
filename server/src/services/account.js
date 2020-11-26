const { Service, Container } = require('typedi');
const jwt = require('jsonwebtoken');
const argon2 = require('argon2');
const { randomBytes } = require('crypto');

Service();
class AccountService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
  }

  async resetPassword(data) {
    // eslint-disable-next-line no-unused-vars
    const user = await this.userModel.findOne({ _id: data.userId }, (error, result) => {
      if (error) throw error;
    });

    try {
      jwt.verify(data.resetPasswordToken,
        user.password,
        (error, decoded) => {
          if (error) {
            const newError = new Error(error.name);
            newError.status = 400;
            throw newError;
          }
          if (user._id !== decoded.id) throw new Error('Ids doesn\'t match');
        });
    } catch (error) {
      this.logger.info(error);
      throw error;
    }
    const salt = randomBytes(32);
    this.logger.silly('Hashing password');
    const hashedPassword = await argon2.hash(data.newPassword, salt);

    await this.userModel.updateOne({ _id: user._id }, { password: hashedPassword, salt });
    const nodemailer = Container.get('nodemailer');
    nodemailer.sendEmail({
      to: user.email,
      username: user.username,
      subject: 'Password Reset',
      template: '../templates/reset-password-email.html',
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
        url: this.generateJtwResetToken(user),
      }, (error) => {
        if (error) throw error;
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  generateJtwResetToken(user) {
    this.logger.silly(`Sign JWT Password Reset Token for user: ${user._id}`);
    return jwt.sign(
      {
        id: user._id,
      },
      user.password,
      {
        expiresIn: '10m',
      },
    );
  }
}

module.exports = AccountService;

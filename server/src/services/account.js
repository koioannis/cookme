const { Service, Container } = require('typedi');

Service();
class AccountService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
  }

  async forgotPassword(email) {
    const user = await this.userModel.findOne({ email });
    try {
      this.logger.info('user: %o', user);
      if (!user) {
        return;
      }

      const nodemailer = Container.get('nodemailer');

      this.logger.info('Trying to send email');
      nodemailer.sendEmail({
        to: user.email,
        username: user.username,
        subject: 'Password Reset',
        template: '../templates/forgot-password-email.html',
        url: 'https://www.google.com/',
      }, (error) => {
        if (error) throw error;
      });
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }
}

module.exports = AccountService;

const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const config = require('../config');

class NodeMailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: config.forgotPassword.username,
        pass: config.forgotPassword.password,
      },
    });
  }

  sendEmail(data, cb) {
    const filePath = path.join(__dirname, data.template);
    const source = fs.readFileSync(filePath, 'utf8').toString();
    const template = handlebars.compile(source);
    const replacements = {
      name: data.username,
      url: data.url,
    };

    const htmlToSend = template(replacements);


    const mailOptions = {
      from: config.forgotPassword.senderEmail,
      to: data.to,
      subject: data.subject,
      text: data.url,
      html: htmlToSend,
    };
    this.transporter.sendMail(mailOptions, cb);
  }
}

const nodeMailer = () => new NodeMailer();
module.exports = nodeMailer;

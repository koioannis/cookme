const nodemailer = require('nodemailer');
const fs = require('fs');
const handlebars = require('handlebars');
const path = require('path');
const config = require('../config');

class NodeMailer {
  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail' || config.email.service,
      auth: {
        user: 'giannis7331@gmail.com',
        pass: 'Giannis852',
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
      from: 'giannis7331@gmail.com',
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

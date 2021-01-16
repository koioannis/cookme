const { Container } = require('typedi');
const LoggerInstance = require('./logger');
const nodeMailer = require('./nodemailer');

const dependencyInjector = ({ models }) => {
  try {
    models.forEach((model) => {
      Container.set(model.name, model.model);
    });

    const nodeMailerInstance = nodeMailer();

    Container.set('logger', LoggerInstance);
    Container.set('nodemailer', nodeMailerInstance);
  } catch (error) {
    LoggerInstance.error('Error on dependency injector loader: %o', error);
    throw error;
  }
};

module.exports = dependencyInjector;

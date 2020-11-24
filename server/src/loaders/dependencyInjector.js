const { Container } = require('typedi');
const LoggerInstance = require('./logger');
const agendaFactory = require('./agenda');
const nodeMailer = require('./nodemailer');

const dependencyInjector = ({ mongoConnection, models }) => {
  try {
    models.forEach((model) => {
      Container.set(model.name, model.model);
    });

    const agendaInstance = agendaFactory(mongoConnection);
    const nodeMailerInstance = nodeMailer();

    Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);
    Container.set('nodemailer', nodeMailerInstance);

    LoggerInstance.info('✌️ Agenda injected into container');

    return agendaInstance;
  } catch (error) {
    LoggerInstance.error('Error on dependency injector loader: %o', error);
    throw error;
  }
};

module.exports = dependencyInjector;

const Agenda = require('agenda');
const config = require('../config');

const agenda = (mongoConnection) => new Agenda({
  mongo: mongoConnection,
  db: { collection: config.agenda.dbCollection },
  processEvery: config.agenda.pooltime,
  maxConcurrency: config.agenda.concurrency,
});

module.exports = agenda;

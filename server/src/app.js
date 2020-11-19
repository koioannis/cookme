const express = require('express');
const Logger = require('./loaders/logger');
const loader = require('./loaders');
const config = require('./config');

async function startServer() {
  const app = express();
  await loader(app);

  app.listen(config.port, () => {
    Logger.info(`
    ####################################
    🏆 Server listening on port: ${config.port} 🏆
    ####################################
    `);
  });
}

startServer();

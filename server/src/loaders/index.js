const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const Logger = require('./logger');

const loader = async (expressApp) => {
  // eslint-disable-next-line no-unused-vars
  const mongoConnection = await mongooseLoader();
  Logger.info('👆 DB loaded and connected');

  await expressLoader(expressApp);
  Logger.info('👆 Express Loaded');
};

module.exports = loader;

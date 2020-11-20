const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const dependencyInjector = require('./dependencyInjector');
const jobsLoader = require('./jobs');
const User = require('../models/user/User');
const UserInfo = require('../models/user/UserInfo');
const Logger = require('./logger');

const loader = async (expressApp) => {
  // eslint-disable-next-line no-unused-vars
  const mongoConnection = await mongooseLoader();
  Logger.info('👆 DB loaded and connected');

  const userModel = {
    name: 'userModel',
    model: User,
  };
  const userInfoModel = {
    name: 'userInfoModel',
    model: UserInfo,
  }

  const agenda = await dependencyInjector({
    mongoConnection,
    models: [
      userModel,
      userInfoModel,
    ],
  });

  Logger.info('👆 Dependency Injector Loaded');

  await jobsLoader(agenda);
  Logger.info('👆 Jobs loaded');

  await expressLoader(expressApp);
  Logger.info('👆 Express Loaded');
};

module.exports = loader;

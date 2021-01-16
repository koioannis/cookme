const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const dependencyInjector = require('./dependencyInjector');
const Logger = require('./logger');
const User = require('../models/user/User');
const userDetails = require('../models/user/UserDetails');
const refreshToken = require('../models/user/RefreshToken');
const post = require('../models/Post');
const ingredient = require('../models/Ingredient');
const comment = require('../models/Comment');

const loader = async (expressApp) => {
  // eslint-disable-next-line no-unused-vars
  const mongoConnection = await mongooseLoader();
  Logger.info('👆 DB loaded and connected');

  const ingredientModel = {
    name: 'ingredientModel',
    model: ingredient,
  };

  const userModel = {
    name: 'userModel',
    model: User,
  };
  const userDetailsModel = {
    name: 'userDetailsModel',
    model: userDetails,
  };

  const refreshTokenModel = {
    name: 'refreshTokenModel',
    model: refreshToken,
  };

  const postModel = {
    name: 'postModel',
    model: post,
  };

  const commentModel = {
    name: 'commentModel',
    model: comment,
  };

  await dependencyInjector({
    models: [
      userModel,
      userDetailsModel,
      refreshTokenModel,
      postModel,
      ingredientModel,
      commentModel,
    ],
  });

  Logger.info('👆 Dependency Injector Loaded');

  await expressLoader(expressApp);
  Logger.info('👆 Express Loaded');
};

module.exports = loader;

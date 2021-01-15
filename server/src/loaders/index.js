const expressLoader = require('./express');
const mongooseLoader = require('./mongoose');
const dependencyInjector = require('./dependencyInjector');
const jobsLoader = require('./jobs');
const Logger = require('./logger');
const User = require('../models/user/User');
const userDetails = require('../models/user/UserDetails');
const refreshToken = require('../models/user/RefreshToken');
const post = require('../models/Post');
const ingredient = require('../models/Ingredient');
<<<<<<< HEAD
=======
const comment = require('../models/Comment');
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66

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

<<<<<<< HEAD
=======
  const commentModel = {
    name: 'commentModel',
    model: comment,
  };

>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
  const agenda = await dependencyInjector({
    mongoConnection,
    models: [
      userModel,
      userDetailsModel,
      refreshTokenModel,
      postModel,
      ingredientModel,
<<<<<<< HEAD
=======
      commentModel,
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
    ],
  });

  Logger.info('👆 Dependency Injector Loaded');

  await jobsLoader(agenda);
  Logger.info('👆 Jobs loaded');

  await expressLoader(expressApp);
  Logger.info('👆 Express Loaded');
};

module.exports = loader;

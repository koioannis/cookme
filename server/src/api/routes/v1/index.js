const { Router } = require('express');
const auth = require('./auth');
const account = require('./account');
const posts = require('./posts');
const follow = require('./follow');

// const versionBase = 'v1';

const apiRoutes = () => {
  const app = Router();

  follow(app);
  auth(app);
  account(app);
  posts(app);

  return app;
};

module.exports = apiRoutes;

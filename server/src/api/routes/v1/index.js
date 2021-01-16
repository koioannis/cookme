const { Router } = require('express');
const auth = require('./auth');
const account = require('./account');
const posts = require('./posts');
const follow = require('./follow');
const admin = require('./admin');

// const versionBase = 'v1';

const apiRoutes = () => {
  const app = Router();

  follow(app);
  auth(app);
  account(app);
  posts(app);
  admin(app);

  return app;
};

module.exports = apiRoutes;

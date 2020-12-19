const { Router } = require('express');
const auth = require('./auth');
const account = require('./account');

// const versionBase = 'v1';

const apiRoutes = () => {
  const app = Router();

  auth(app);
  account(app);

  return app;
};

module.exports = apiRoutes;

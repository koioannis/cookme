const { Router } = require('express');
const auth = require('./routes/auth');
const account = require('./routes/account');

const apiRoutes = () => {
  const app = Router();

  auth(app);
  account(app);

  return app;
};

module.exports = apiRoutes;

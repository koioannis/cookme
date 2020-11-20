const { Router } = require('express');
const auth = require('./routes/auth');

const apiRoutes = () => {
  const app = Router();

  auth(app);

  return app;
};

module.exports = apiRoutes;

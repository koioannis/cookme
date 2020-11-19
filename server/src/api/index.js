const { Router } = require('express');
const helloworld = require('./routes/helloworld');

const apiRoutes = () => {
  const app = Router();

  helloworld(app);

  return app;
};

module.exports = apiRoutes;

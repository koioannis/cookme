const { Router } = require('express');

const route = Router();

const helloworld = (app) => {
  app.use('/helloworld', route);
  route.get('/', (req, res) => res.json({ message: 'hello world' }).status(200));
};

module.exports = helloworld;

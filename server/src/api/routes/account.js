const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const { Container } = require('typedi');

const AccountService = require('../../services/account.js');

const route = Router();
const account = (app) => {
  app.use('/account', route);
  const logger = Container.get('logger');

  route.post('/forgot-password',
    celebrate({
      body: Joi.object({
        email: Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      logger.debug('Calling Forgot Password endpoint wth body %o', req.body);

      const accountServiceInstance = Container.get(AccountService);
      await accountServiceInstance.forgotPassword(req.body.email);
      res.status(200).json({ message: 'An email has been sent' }).end();
    });
};

module.exports = account;

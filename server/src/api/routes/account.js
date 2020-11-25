const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const { Container } = require('typedi');

const AccountService = require('../../services/account.js');
const middlewares = require('../middlewares');

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

  route.post('/reset-password',
    celebrate({
      body: Joi.object({
        resetPasswordToken: Joi.string().required(),
        newPassword: Joi.string().required(),
      }),
    }),
    middlewares.isResetTokenValid,
    async (req, res, next) => {
      logger.debug('Calling Reset Password endpoint wth body %o', req.body);
      const accountServiceInstance = Container.get(AccountService);
      const message = await accountServiceInstance.resetPassword(
        {
          userId: res.locals.userId,
          newPassword: req.body.newPassword,
        },
      );
      res.status(200).json(message);
    });
};

module.exports = account;

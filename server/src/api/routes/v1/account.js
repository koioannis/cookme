const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const { Container } = require('typedi');

const AccountService = require('../../../services/account.js');
const RouteFactory = require('../../RouteFactory');

const ApiRoutes = RouteFactory('v1');
const route = Router();
const account = (app) => {
  app.use(route);
  const logger = Container.get('logger');

  route.post(ApiRoutes.ForgotPassword,
    celebrate({
      body: Joi.object({
        email: Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      try {
        logger.debug('Calling Forgot Password endpoint wth body %o', req.body);

        const accountServiceInstance = Container.get(AccountService);
        await accountServiceInstance.forgotPassword(req.body.email);
        return res.status(200).json({ message: 'An email has been sent' });
      } catch (error) {
        return next(error);
      }
    });

  route.post(ApiRoutes.ResetPassword,
    celebrate({
      body: Joi.object({
        resetPasswordToken: Joi.string().required(),
        newPassword: Joi.string().required(),
      }),
    }),
    async (req, res, next) => {
      logger.debug('Calling Reset Password endpoint wth body %o', req.body);
      const accountServiceInstance = Container.get(AccountService);
      let message;

      try {
        message = await accountServiceInstance.resetPassword(req.body);
      } catch (error) {
        error.status = 200;
        return next(error);
      }

      return res.status(200).json(message);
    });
};

module.exports = account;

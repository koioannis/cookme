const { Router } = require('express');
const { Container } = require('typedi');
const { celebrate, Joi } = require('celebrate');
const AuthService = require('../../services/auth');

const route = Router();

const auth = (app) => {
  app.use('/auth', route);

  route.post('/signup',
    celebrate({
      body: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        userInfo: Joi.object({
          firstName: Joi.string().required(),
          lastName: Joi.string().required(),
        }),
      }),
    }),
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Sign-Up endpoint wth body %o', req.body);
      try {
        const authServiceInstance = Container.get(AuthService);
        const retValue = await authServiceInstance.SignUp(req.body);

        return res.status(201).json(retValue);
      } catch (error) {
        logger.error('Error %o', error);

        return next(error);
      }
    });
};

module.exports = auth;

const { Router } = require('express');
const { Container } = require('typedi');
const { celebrate, Joi } = require('celebrate');

const middlewares = require('../middlewares');
const AuthService = require('../../services/auth');
const ApiRoutes = require('../ApiRoutes');

const route = Router();
const auth = (app) => {
  app.use(route);

  route.post(ApiRoutes.SignUp,
    celebrate({
      body: Joi.object({
        username: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        userDetails: Joi.object({
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

        if (retValue.token) {
          res.cookie('authcookie', retValue.token, {
            secure: false,
            httpOnly: true,
            sameSite: true,
          });
        }
        res.json(retValue.data);

        return res.status(201);
      } catch (error) {
        logger.error('Error %o', error);

        return next(error);
      }
    });

  route.post(ApiRoutes.SignIn, celebrate({
    body: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  }),
  async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Sign-In endpoint with body: %o', req.body);

    try {
      const authServiceInstance = Container.get(AuthService);
      const retValue = await authServiceInstance.SignIn(req.body);

      if (retValue.token) {
        res.cookie('authcookie', retValue.token, {
          secure: false,
          httpOnly: true,
          sameSite: true,
        });
      }
      res.json(retValue.data);

      return res.status(200);
    } catch (error) {
      logger.error('error : %o', error);
      return next(error);
    }
  });

  route.post(ApiRoutes.SignOut, middlewares.isAuth, (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Sign-out endpoint iwth body: %o', req.body);
    try {
      const authServiceInstance = Container.get(AuthService);
      authServiceInstance.SignOut(res);
      return res.status(200).json({ message: 'Signed out' });
    } catch (error) {
      logger.error('error %o', error);
      return next(error);
    }
  });
};

module.exports = auth;

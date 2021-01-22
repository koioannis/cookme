const { Router } = require('express');
const { Container } = require('typedi');
const { celebrate, Joi } = require('celebrate');

const middlewares = require('../../middlewares');
const AuthService = require('../../../services/auth');
const RouteFactory = require('../../RouteFactory');

const route = Router();
const ApiRoutes = RouteFactory('v1');

const auth = (app) => {
  app.use(route);
  route.post(ApiRoutes.Register,
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
        const authenticationResult = await authServiceInstance.Register(req.body);

        const { refreshToken, ...data } = authenticationResult;
        if (authenticationResult.accessToken && authenticationResult.refreshToken) {
          res.cookie('refreshToken', refreshToken, {
            secure: false,
            httpOnly: true,
            sameSite: true,
          });
        }
        res.json(data);

        return res.status(201);
      } catch (error) {
        logger.error('Error %o', error);

        return next(error);
      }
    });

  route.post(ApiRoutes.LogIn, celebrate({
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
      const authenticationResult = await authServiceInstance.Login(req.body);

      const { refreshToken, ...data } = authenticationResult;
      if (authenticationResult.accessToken && authenticationResult.refreshToken) {
        res.cookie('refreshToken', refreshToken, {
          secure: false,
          httpOnly: true,
          sameSite: true,
        });
      }
      res.json(data);

      return res.status(200);
    } catch (error) {
      logger.error('error : %o', error);
      return next(error);
    }
  });

  route.post(ApiRoutes.LogOut, middlewares.isAuth, (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Sign-out endpoint with body: %o', req.body);
    try {
      const authServiceInstance = Container.get(AuthService);
      authServiceInstance.Logout(res);
      return res.status(200).json({ message: 'Signed out' });
    } catch (error) {
      logger.error('error %o', error);
      return next(error);
    }
  });

  route.post(ApiRoutes.RefreshToken, async (req, res, next) => {
    const logger = Container.get('logger');
    logger.info('Calling refresh endpoint with body %o', req.body);

    const oldAccessToken = req.header('Authorization').split(' ')[1];
    const oldRefreshToken = req.cookies.refreshToken;
    const authServiceInstance = Container.get(AuthService);

    try {
      const { refreshToken, accessToken } = await authServiceInstance.RefreshToken({
        oldAccessToken,
        oldRefreshToken,
      });

      if (accessToken && refreshToken) {
        res.cookie('refreshToken', refreshToken, {
          secure: false,
          httpOnly: true,
          sameSite: true,
        });
      }

      res.json({ accessToken });
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });
};

module.exports = auth;

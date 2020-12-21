const { Router } = require('express');
const { celebrate, Joi } = require('celebrate');
const { Container } = require('typedi');
const middlewares = require('../../middlewares');

const PostsService = require('../../../services/posts');
const RouteFactory = require('../../RouteFactory');

const ApiRoutes = RouteFactory('v1');
const route = Router();
const posts = (app) => {
  app.use(route);

  route.post(ApiRoutes.CreatePost, middlewares.isAuth, celebrate({
    body: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
    }),
  }),
  async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Create-Post endpoint with body: %o', req.body);

    try {
      const postsServiceInstance = Container.get(PostsService);

      const result = await postsServiceInstance.CreatePost({
        userId: res.locals.userId,
        title: req.body.title,
        description: req.body.description,
      });

      res.json(result);
      return res.status(201);
    } catch (error) {
      logger.error('error : %o', error);
      return next(error);
    }
  });

  route.get(ApiRoutes.GetAllPosts, middlewares.isAuth, async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Get-All-Posts endpoint with body: %o', req.body);
    try {
      const postsServiceInstance = Container.get(PostsService);
      const result = await postsServiceInstance.GetAllPosts({ userId: res.locals.userId });

      res.json(result);
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });
};

module.exports = posts;

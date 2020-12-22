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

  route.delete(ApiRoutes.PostAction, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Post (Delete) endpoint with params %o', req.params);

      try {
        const postsServiceInstance = Container.get(PostsService);

        await postsServiceInstance.DeletePost({
          postId: req.params.postId,
          userId: res.locals.userId,
        });

        return res.status(200).end();
      } catch (error) {
        return next(error);
      }
    });

  route.patch(ApiRoutes.PostAction, middlewares.isAuth, celebrate({
    body: Joi.object({
      title: Joi.string(),
      description: Joi.string(),
    }).or('title', 'description'),
  }),
  async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Post (Patch) endpoint with body: %o and params %o', req.body, req.params);

    try {
      const postsServiceInstance = Container.get(PostsService);

      const results = await postsServiceInstance.ModifyPost({
        postId: req.params.postId,
        data: req.body,
        userId: res.locals.userId,
      });
      res.json(results);
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });

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

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

  route.get(ApiRoutes.PostAction, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Post (GET) endpoint with params %o', req.params);

      try {
        const postsServiceInstance = Container.get(PostsService);

        const result = await postsServiceInstance.GetPost({
          postId: req.params.postId,
          userId: res.locals.userId,
        });

        res.json(result);
        return res.status(200);
      } catch (error) {
        return next(error);
      }
    });

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
      steps: Joi.array().required(),
      ingredients: Joi.array().items(Joi.object({
        name: Joi.string().required(),
        quantity: Joi.string().required(),
      })).required(),
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
        ingredients: req.body.ingredients,
        steps: req.body.steps,
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
      const result = await postsServiceInstance.GetAllPosts({ username: req.params.username });

      res.json(result);
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });

  route.post(ApiRoutes.CreateComment, middlewares.isAuth, celebrate({
    body: Joi.object({
      content: Joi.string().required(),
    }).required(),
  }),
  async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling CreateComment end-point with body %o', req.body);
    try {
      const postsServiceInstance = Container.get(PostsService);
      const result = await postsServiceInstance.CreateComment({
        userId: res.locals.userId,
        postId: req.params.postId,
        content: req.body.content,
      });

      res.json(result);
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });

  route.delete(ApiRoutes.Comment, middlewares.isAuth, async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Comment (Delete) end-point');
    try {
      const postsServiceInstance = Container.get(PostsService);
      const result = await postsServiceInstance.DeleteComment({
        postId: req.params.postId,
        commentId: req.params.commentId,
      });

      res.json(result);
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });

  route.put(ApiRoutes.Comment, middlewares.isAuth, celebrate({
    body: Joi.object({
      content: Joi.string().required(),
    }).required(),
  }),
  async (req, res, next) => {
    const logger = Container.get('logger');
    logger.debug('Calling Comment (Delete) end-point');
    try {
      const postsServiceInstance = Container.get(PostsService);
      const result = await postsServiceInstance.ModifyComment({
        postId: req.params.postId,
        commentId: req.params.commentId,
        content: req.body.content,
      });

      res.json(result);
      return res.status(200);
    } catch (error) {
      return next(error);
    }
  });

  route.get(ApiRoutes.GetRandomPosts, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Comment (GetRandomPosts) end-point');
      try {
        const postsServiceInstance = Container.get(PostsService);
        const result = await postsServiceInstance.GetRandomPosts({
          count: req.params.count,
          userId: res.locals.userId,
        });

        res.json(result);
        return res.status(200);
      } catch (error) {
        return next(error);
      }
    });
};

module.exports = posts;

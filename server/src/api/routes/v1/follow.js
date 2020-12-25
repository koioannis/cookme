const { Router } = require('express');
const { Container } = require('typedi');
const middlewares = require('../../middlewares');

const FollowService = require('../../../services/follow.js');
const RouteFactory = require('../../RouteFactory');

const ApiRoutes = RouteFactory('v1');
const route = Router();
const follow = (app) => {
  app.use(route);

  route.post(ApiRoutes.Follow, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Follow (Post) endpoint wth params %o', req.params);
      try {
        const followServiceInstance = Container.get(FollowService);
        await followServiceInstance.FollowUser({
          userId: res.locals.userId,
          userToFollowId: req.params.userId,
        });

        return res.status(200).end();
      } catch (error) {
        return next(error);
      }
    });

  route.delete(ApiRoutes.Follow, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Follow (Delete) endpoint wth params %o', req.params);
      try {
        const followServiceInstance = Container.get(FollowService);
        await followServiceInstance.UnfollowUser({
          userId: res.locals.userId,
          userToUnfollowId: req.params.userId,
        });

        return res.status(200).end();
      } catch (error) {
        return next(error);
      }
    });

  route.get(ApiRoutes.GetAllFollowers, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Get All Followers Endpoint');

      try {
        const followServiceInstance = Container.get(FollowService);
        const result = await followServiceInstance.GetAllFollowers({ userId: res.locals.userId });

        res.json(result);
        return res.status(200);
      } catch (error) {
        return next(error);
      }
    });

  route.get(ApiRoutes.GetAllFollowing, middlewares.isAuth,
    async (req, res, next) => {
      const logger = Container.get('logger');
      logger.debug('Calling Get All Followers Endpoint');

      try {
        const followServiceInstance = Container.get(FollowService);
        const result = await followServiceInstance.GetAllFollowing({ userId: res.locals.userId });

        res.json(result);
        return res.status(200);
      } catch (error) {
        return next(error);
      }
    });
};

module.exports = follow;

const { Router } = require('express');
const { Container } = require('typedi');

const middlewares = require('../../middlewares');
const AdminService = require('../../../services/admin.js');
const RouteFactory = require('../../RouteFactory');

const ApiRoutes = RouteFactory('v1');
const route = Router();
const admin = (app) => {
  app.use(route);
  const logger = Container.get('logger');

  route.delete(ApiRoutes.DeleteComment, middlewares.isAuth,
    async (req, res, next) => {
      try {
        logger.debug('Calling Delete Comment endpoint');

        if (!res.locals.isAdmin) res.status(401).send();

        const adminServiceInstance = Container.get(AdminService);
        await adminServiceInstance.DeleteComment(req.params.commentId);
        return res.status(204).send();
      } catch (error) {
        return next(error);
      }
    });

  route.delete(ApiRoutes.DeletePost, middlewares.isAuth,
    async (req, res, next) => {
      try {
        logger.debug('Calling Delete Post endpoint');

        if (!res.locals.isAdmin) res.status(401).send();

        const adminServiceInstance = Container.get(AdminService);
        await adminServiceInstance.DeletePost(req.params.postId);
        return res.status(204).send();
      } catch (error) {
        return next(error);
      }
    });
};

module.exports = admin;

/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const config = require('../../config');

function isAuth(req, res, next) {
  if (!req.header('Authorization')) {
    const error = new Error('JWT was not provided');
    error.status = 400;
    throw error;
  }
  const token = req.header('Authorization').split(' ')[1];
  if (token) {
    jwt.verify(token,
      config.jwtSecret,
      (error, decoded) => {
        if (error) {
          const newError = new Error(error.name);
          newError.status = 401;
          throw newError;
        }
        res.locals.userId = decoded.userId;
        res.locals.isAdmin = decoded.isAdmin;
      });
    return next();
  }
}

module.exports = isAuth;

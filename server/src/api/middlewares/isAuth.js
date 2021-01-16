const jwt = require('jsonwebtoken');
const config = require('../../config');

function isAuth(req, res, next) {
  if (req.header('x-auth-token')) {
    jwt.verify(req.header('x-auth-token'),
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

  const error = new Error('JWT was not provided');
  error.status = 400;
  throw error;
}

module.exports = isAuth;

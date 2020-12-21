const jwt = require('jsonwebtoken');
const config = require('../../config');

function isAuth(req, res, next) {
  if (req.body.accessToken) {
    jwt.verify(req.body.accessToken,
      config.jwtSecret,
      (error, decoded) => {
        if (error) {
          const newError = new Error(error.name);
          newError.status = 401;
          throw newError;
        }
        res.locals = decoded;
      });
    return next();
  }

  const error = new Error('JWT was not provided');
  error.status = 400;
  throw error;
}

module.exports = isAuth;

const jwt = require('jsonwebtoken');
const config = require('../../config');

function isResetTokenValid(req, res, next) {
  if (req.body.resetPasswordToken) {
    jwt.verify(req.body.resetPasswordToken,
      config.jwtResetPasswordSecret,
      (error, decoded) => {
        if (error) {
          const newError = new Error(error.name);
          newError.status = 400;
          throw newError;
        }
        res.locals.userId = decoded.id;
      });
    return next();
  }

  throw new Error('Token was not provided');
}

module.exports = isResetTokenValid;

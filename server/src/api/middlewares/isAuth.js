const jwt = require('jsonwebtoken');
const config = require('../../config');

function isAuth(req, res, next) {
  if (req.cookies.authcookie) {
    jwt.verify(req.cookies.authcookie,
      config.jwtSecret,
      (error, decoded) => {
        if (error) {
          const newError = new Error('Invalid Token');
          newError.status = 400;
          throw newError;
        }
        res.locals.id = decoded.id;
      });
    return next();
  }

  throw new Error('Cookie was not provided');
}

module.exports = isAuth;

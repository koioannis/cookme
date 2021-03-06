const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const { isCelebrateError } = require('celebrate');
const config = require('../config');

const routes = require('../api');
const swaggerDocument = require('../../swagger.json');

const expressLoader = (app) => {
  app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', config.client);
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Set-Cookie, Origin, X-Requested-With, Content-Type, Accept, X-HTTP-Method-Override');
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');
    next();
  });

  /**
   * Health Status endpoints
  */
  app.get('/status', (req, res) => {
    res.status(200).end();
  });
  app.head('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(methodOverride());

  app.use(helmet());
  app.use(cors({ credentials: true, origin: config.client }));
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use(routes());
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  // catch 404 errors and forward them to error handler
  app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
  });

  // error handlers
  app.use((error, req, res, next) => {
    if (error.name === 'UnauthorizedError') {
      return res
        .status(error.status)
        .send({ message: error.message })
        .end();
    }
    return next(error);
  });
  // use next parameter to trigger this function
  app.use((error, req, res, next) => {
    res.status(error.status || 500);

    if (isCelebrateError(error)) {
      res.status(400);
    }

    res.send({
      errors: {
        message: error.message,
      },
    });
  });
};

module.exports = expressLoader;

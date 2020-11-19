const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const methodOverride = require('method-override');

const config = require('../config');
const routes = require('../api');

const expressLoader = (app) => {
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

  app.use(cors());
  app.use(bodyParser.json());
  app.use(helmet());

  app.use(config.api.prefix, routes());

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
  app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
      errors: {
        message: error.message,
      },
    });
  });
};

module.exports = expressLoader;
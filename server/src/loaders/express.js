const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');

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

  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(cookieParser());

  app.use(routes());

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
    res.send({
      errors: {
        message: error.message,
      },
    });
  });
};

module.exports = expressLoader;

const dotenv = require('dotenv');

const env = dotenv.config();
if (env.error) {
  throw new Error('🔥 couldn\'t find .env file 🔥');
}

const getCookieSettings = (onProduction) => ({
  secure: onProduction,
  httpOnly: true,
  samesite: onProduction ? 'none' : false,
});

const config = {
  port: parseInt(process.env.PORT, 10),

  databaseURL: process.env.MONGODB_URI,

  forgotPassword: {
    username: process.env.GMAIL_USERNAME,
    password: process.env.GMAIL_PASSWORD,
    url: process.env.FORGOT_PASSWORD_URL,
  },

  jwtSecret: process.env.JWT_SECRET,
  jwtAlgo: process.env.JWT_ALGO,

  api: {
    prefix: '/api',
  },

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },

  agenda: {
    collection: process.env.AGENDA_COLLECTION_NAME,
    processEvery: parseInt(process.env.AGENDA_POOL_TIME, 10),
    maxConcurrency: process.env.AGENDA_MAX_CONCURRENCY,
  },

  client: process.env.ON_PRODUCTION ? 'https://www.cookme.com' : 'http://localhost:8080',
  cookieSettings: getCookieSettings(process.env.ON_PRODUCTION),
};
module.exports = config;

const dotenv = require('dotenv');

// Set NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const env = dotenv.config();
if (env.error) {
  throw new Error('🔥 couldn\'t find .env file 🔥');
}

const config = {
  port: parseInt(process.env.PORT, 10),

  databaseURL: process.env.MONGODB_URI,

  gmail: {
    username: process.env.GMAIL_USERNAME,
    password: process.env.GMAIL_PASSWORD,
  },

  jwtResetPasswordSecret: process.env.JWT_RESET_PASSWORD_SECRET,
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
};

module.exports = config;

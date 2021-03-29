const dotenv = require('dotenv');

const env = dotenv.config();
if (env.error) {
  throw new Error('🔥 couldn\'t find .env file 🔥');
}

const getCookieSettings = (nodeEnv) => ({
  secure: nodeEnv === 'production',
  httpOnly: true,
  sameSite: nodeEnv === 'production' ? 'strict' : false,
  expires: new Date(Date.now() + 3600 * 1000 * 24 * 365),
});

const config = {
  port: parseInt(process.env.PORT, 10),

  databaseURL: process.env.MONGODB_URI,


  forgotPassword: {
    username: process.env.GMAIL_USERNAME,
    password: process.env.GMAIL_PASSWORD,
    senderEmail: process.env.SENDER_EMAIL,
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

  client: process.env.NODE_ENV === 'production' ? 'https://www.cookme.me' : 'http://localhost:8080',
  cookieSettings: getCookieSettings(process.env.NODE_ENV),
};
module.exports = config;

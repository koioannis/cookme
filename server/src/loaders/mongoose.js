const mongoose = require('mongoose');
const config = require('../config');

const mongooseLoader = async () => {
  mongoose.set('debug', true);
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  return connection.connection.db;
};

module.exports = mongooseLoader;

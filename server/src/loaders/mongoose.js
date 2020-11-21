const mongoose = require('mongoose');
const config = require('../config');

const mongooseLoader = async () => {
  const connection = await mongoose.connect(config.databaseURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });
  console.log('DB connected');
  return connection.connection.db;
};

module.exports = mongooseLoader;

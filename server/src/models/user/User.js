const mongoose = require('mongoose');
const userInfo = require('./UserInfo');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  email: {
    type: String,
    required: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
  },
  userInfo: {
    type: userInfo,
    required: false,
  },
});

module.exports = userSchema;

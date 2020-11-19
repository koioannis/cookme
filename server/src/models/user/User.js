const mongoose = require('mongoose');

const userSchema = new mongoose.Schema('User', {
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
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserInfo',
  },
});

module.exports = userSchema;

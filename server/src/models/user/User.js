const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: false,
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
  salt: {
    type: String,
    required: true,
    max: 32,
  },
  userDetails: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserInfo',
    required: false,
  },
});

module.exports = mongoose.model('User', userSchema);

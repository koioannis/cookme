const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  lastName: {
    type: String,
    required: false,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    max: 1024,
  },
});

module.exports = userInfoSchema;

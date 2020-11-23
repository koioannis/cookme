const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  _user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
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
});
module.exports = mongoose.model('UserInfo', userDetails);

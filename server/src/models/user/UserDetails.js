const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
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
  description: {
    type: String,
    required: false,
  },
});
module.exports = mongoose.model('UserDetails', userDetailsSchema);

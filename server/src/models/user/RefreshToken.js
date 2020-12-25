const mongoose = require('mongoose');

const refreshToken = new mongoose.Schema({
  token: {
    type: String,
    unique: true,
    required: true,
  },
  jwtId: {
    type: String,
    required: true,
  },
  used: {
    type: Boolean,
    required: true,
    default: false,
  },
  invalidated: {
    type: Boolean,
    required: true,
    default: false,
  },
  expireDate: {
    type: Date,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('RefreshToken', refreshToken);

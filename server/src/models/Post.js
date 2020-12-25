const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
    min: 6,
    max: 255,
  },
  description: {
    type: String,
    required: false,
    max: 255,
    min: 6,
  },
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);

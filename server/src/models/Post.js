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
  grade: {
    type: Number,
    required: true,
    default: () => Math.floor(Math.random() * 2 + 3),
  },
  steps: [{
    type: String,
    required: true,
  }],
  ingredients: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Ingredient',
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);

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
<<<<<<< HEAD
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false,
=======
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment',
  }],
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
  },
}, { timestamps: true });

module.exports = mongoose.model('Post', postSchema);

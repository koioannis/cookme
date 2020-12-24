const mongoose = require('mongoose');

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    min: 2,
    max: 255,
    required: true,
  },
  quantity: {
    type: String,
    min: 1,
    max: 255,
    required: true,
  },
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
});

module.exports = mongoose.model('Ingredient', ingredientSchema);

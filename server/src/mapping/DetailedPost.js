const DetailedPostDTO = {
  _id: 'id',
  title: 'title',
  description: 'description',
  createdAt: 'createdAt',
  steps: 'steps',
  grade: 'grade',
  ingredientsPrice: 'ingredientsPrice',
  'comments[]._id': 'comments[].id',
  'comments[].createdAt': 'comments[].createdAt',
  'comments[].content': 'comments[].content',
  'comments[].user._id': 'comments[].user.id',
  'comments[].user.username': 'comments[].user.username',
  'ingredients[].name': 'ingredients[].name',
  'ingredients[].quantity': 'ingredients[].quantity',
  'user._id': 'user.id',
  'user.username': 'user.username',
};

module.exports = DetailedPostDTO;

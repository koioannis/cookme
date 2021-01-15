const PostDTO = {
  _id: 'id',
  title: 'title',
  description: 'description',
  createdAt: 'createdAt',
  'ingredients[].name': 'ingredients[].name',
  'ingredients[].quantity': 'ingredients[].quantity',
  'comments[].content': 'comments[].content',
  'comments[].user': 'comments[].user',
  'comments[].createdAt': 'comments[].createdAt',
  'comments[]._id': 'comments[].id',
};

module.exports = PostDTO;

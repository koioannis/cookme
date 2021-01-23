const PostDTO = {
  _id: 'id',
  title: 'title',
  description: 'description',
  createdAt: 'createdAt',
  grade: 'grade',
  'user._id': 'user.id',
  'user.username': 'user.username',
};

module.exports = PostDTO;

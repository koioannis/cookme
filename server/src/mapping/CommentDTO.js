const CommentDTO = {
  _id: 'id',
  content: 'content',
  createdAt: 'createdAt',
  grade: 'grade',
  'user._id': 'user.id',
  'user.username': 'user.username',
};

module.exports = CommentDTO;

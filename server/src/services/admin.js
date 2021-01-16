const { Service, Container } = require('typedi');

Service();
class AdminService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.postModel = Container.get('postModel');
    this.commentModel = Container.get('commentModel');
    this.ingredientModel = Container.get('ingredientModel');
  }

  async DeleteComment(commentId) {
    const commentRecord = await this.commentModel.findOne({ _id: commentId }).populate('user');
    if (!commentRecord) {
      const error = new Error('Comment not found');
      error.status = 404;
      throw error;
    }

    const postRecord = await this.postModel.findOne({ _id: commentRecord.post });

    const index = postRecord.comments.indexOf(commentRecord._id);
    postRecord.comments.splice(index, 1);
    await postRecord.save();

    await this.commentModel.deleteOne({ _id: commentRecord._id });
  }

  async DeletePost(postId) {
    const postRecord = await this.postModel.findOne({ _id: postId });
    if (!postRecord) {
      const error = new Error('Post not found');
      error.status = 404;
      throw error;
    }

    if (postRecord.comments.length !== 0) {
      await this.commentModel.deleteMany({ _id: { $in: postRecord.comments } }).exec();
    }

    if (postRecord.ingredients.length !== 0) {
      await this.ingredientModel.deleteMany({
        _id: { $in: postRecord.ingredients },
      }).exec();
    }

    const userRecord = await this.userModel.findOne({ _id: postRecord.user });
    const index = userRecord.posts.indexOf(postRecord._id);
    userRecord.posts.splice(index, 1);
    await userRecord.save();

    await this.postModel.deleteOne({ _id: postRecord._id });
  }
}

module.exports = AdminService;

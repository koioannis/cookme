const { Service, Container } = require('typedi');
const objectMapper = require('object-mapper');
const postDTO = require('../mapping/PostDTO');

Service();
class PostsService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.postModel = Container.get('postModel');
    this.ingredientModel = Container.get('ingredientModel');
    this.commentModel = Container.get('commentModel');
  }

  async DeletePost({ postId, userId }) {
    const postRecord = await this.postModel.findOneAndDelete(
      { $and: [{ _id: postId }, { user: userId }] },
    );

    if (!postRecord) {
      const error = new Error('Post not found');
      error.status = 404;
      throw error;
    }

    const userRecord = await this.userModel.findOne({ _id: postRecord.user });

    const index = userRecord.posts.indexOf(postRecord._id);
    userRecord.posts.splice(index, 1);
    await userRecord.save();
  }

  async ModifyPost({ postId, data, userId }) {
    const update = {};
    if (data.title) update.title = data.title;
    if (data.description) update.description = data.description;

    const postRecord = await this.postModel.findOneAndUpdate({
      $and: [{ _id: postId }, { user: userId }],
    }, update, (error) => {
      if (error) throw error;
    }, { new: true });

    if (!postRecord) {
      const error = new Error('Post not found');
      error.status = 404;
      throw error;
    }

    return objectMapper(postRecord, postDTO);
  }

  async CreatePost({
    userId, title, description, ingredients,
  }) {
    const userRecord = await this.userModel.findOne({ _id: userId }, (error) => {
      if (error) throw error;
    });
    if (!userRecord) {
      const error = new Error('User not found');
      error.status = 400;
      throw error;
    }
    const postRecord = await this.postModel.create({ title, description, user: userRecord._id });

    const ingredientRecords = [];
    ingredients.forEach(async (ingredient) => {
      ingredientRecords.push(await this.ingredientModel.create({
        name: ingredient.name,
        quantity: ingredient.quantity,
        post: postRecord,
      }));
    });

    await postRecord.save();
    await this.postModel.updateOne({ _id: postRecord._id },
      { $push: { ingredients: { $each: ingredientRecords } } });
    await userRecord.posts.push(postRecord);
    await userRecord.save();

    const newPostRecord = await this.postModel.findOne({ _id: postRecord._id }).populate('ingredients');
    return objectMapper(newPostRecord, postDTO);
  }

  async GetAllPosts({ userId }) {
    const userRecord = await this.userModel.findOne({ _id: userId }).populate({
      path: 'posts',
      populate: {
        path: 'comments',
      },
    }).populate({
      path: 'posts',
      populate: {
        path: 'ingredients',
      },
    });
    const posts = [];

    this.logger.debug('%o', userRecord.posts[0]);
    userRecord.posts.forEach((post) => {
      this.logger.debug('%o', post);
      posts.push(objectMapper(post, postDTO));
    });
    return posts;
  }

  async CreateComment({ userId, postId, content }) {
    const commentRecord = await this.commentModel.create({ user: userId, post: postId, content });

    const postRecord = await this.postModel.findOneAndUpdate({ _id: postId }, { $push: { comments: commentRecord } }, { new: true }).populate('comments').populate('ingredients').exec();

    return objectMapper(postRecord, postDTO);
  }

  async DeleteComment({ postId, commentId }) {
    const postRecord = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $pull: { comments: commentId } }, { new: true },
    ).populate('comments').populate('ingredients').exec();

    if (!postRecord) {
      const error = new Error('Post not found');
      error.status = 404;
      throw error;
    }
    const oldCommentRecord = await this.commentModel.findOneAndDelete({ _id: commentId });
    if (!oldCommentRecord) {
      const error = new Error('Comment not found');
      error.status = 404;
      throw error;
    }

    this.logger.debug('%o', postRecord);
    this.logger.debug(commentId);
    return objectMapper(postRecord, postDTO);
  }

  async ModifyComment({ postId, commentId, content }) {
    const commentRecord = await this.commentModel.findOneAndUpdate({ _id: commentId }, { content });

    if (!commentRecord) {
      const error = new Error('Comment not found');
      error.status = 404;
      throw error;
    }

    const postRecord = await this.postModel.findOne({ _id: postId }).populate('comments').populate('ingredients').exec();
    if (!postRecord) {
      const error = new Error('Post not found');
      error.status = 404;
      throw error;
    }

    return objectMapper(postRecord, postDTO);
  }
}

module.exports = PostsService;

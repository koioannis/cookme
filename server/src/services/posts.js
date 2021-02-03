const { Service, Container } = require('typedi');
const objectMapper = require('object-mapper');
const mongoose = require('mongoose');
const postDTO = require('../mapping/PostDTO');
const detailedPostDTO = require('../mapping/DetailedPost');
const commentDTO = require('../mapping/CommentDTO');

Service();
class PostsService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.postModel = Container.get('postModel');
    this.ingredientModel = Container.get('ingredientModel');
    this.commentModel = Container.get('commentModel');
  }

  async GetPost({ postId }) {
    const postRecord = await this.postModel.findOne(
      { _id: postId },
    ).populate({
      path: 'comments',
      populate: 'user',
    }).populate('ingredients').populate('user');

    return objectMapper(postRecord, detailedPostDTO);
  }

  async DeletePost({ postId, userId, isAdmin }) {
    let postRecord = null;

    if (!isAdmin) {
      postRecord = await this.postModel.findOneAndDelete(
        { $and: [{ _id: postId }, { user: userId }] },
      );
    } else {
      postRecord = await this.postModel.findOneAndDelete({ _id: postId });
    }

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

    return objectMapper(postRecord, detailedPostDTO);
  }

  async CreatePost({
    userId, title, description, ingredients, steps, ingredientsPrice,
  }) {
    const userRecord = await this.userModel.findOne({ _id: userId }, (error) => {
      if (error) throw error;
    });
    if (!userRecord) {
      const error = new Error('User not found');
      error.status = 400;
      throw error;
    }
    const postRecord = await this.postModel.create({
      title,
      description,
      user: userRecord._id,
      steps,
      ingredientsPrice,
    });

    // eslint-disable-next-line no-restricted-syntax
    for await (const ingredient of ingredients) {
      await this.ingredientModel.create({
        name: ingredient.name,
        quantity: ingredient.quantity,
        post: postRecord,
      });
    }

    const ingredientRecords = await this.ingredientModel.find({ post: postRecord._id });
    this.logger.debug('%o', ingredientRecords);
    await postRecord.save();
    await this.postModel.updateOne({ _id: postRecord._id },
      { $push: { ingredients: { $each: ingredientRecords } } });
    await userRecord.posts.push(postRecord);
    await userRecord.save();

    const newPostRecord = await this.postModel.findOne({ _id: postRecord._id }).populate('ingredients').populate('user');
    return objectMapper(newPostRecord, detailedPostDTO);
  }

  async GetAllPosts({ username }) {
    const userRecord = await this.userModel.findOne({ username }).populate({
      path: 'posts',
      populate: {
        path: 'user',
      },
    });
    if (!userRecord) {
      const error = new Error('User not found');
      error.status = 404;
      throw error;
    }
    const posts = [];

    userRecord.posts.forEach((post) => {
      posts.push(objectMapper(post, postDTO));
    });
    return posts;
  }

  async CreateComment({ userId, postId, content }) {
    const commentRecord = await this.commentModel.create({ user: userId, post: postId, content });

    const postRecord = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $push: { comments: commentRecord } },
      { new: true },
    ).populate({
      path: 'comments',
      populate: 'user',
    }).populate('ingredients').populate('user');

    return objectMapper(postRecord, detailedPostDTO);
  }

  async DeleteComment({
    postId, userId, commentId, isAdmin,
  }) {
    const oldCommentRecord = await this.commentModel.findOne({ _id: commentId }).populate('user');
    if (!oldCommentRecord) {
      const error = new Error('Comment not found');
      error.status = 404;
      throw error;
    }

    this.logger.debug(oldCommentRecord.user._id !== userId);
    if (String(oldCommentRecord.user._id) !== userId) {
      if (!isAdmin) {
        const error = new Error('Not authorized');
        error.status = 401;
        throw error;
      }
    }

    const postRecord = await this.postModel.findOneAndUpdate(
      { _id: postId },
      { $pull: { comments: commentId } }, { new: true },
    ).populate('comments').populate('ingredients').exec();

    if (!postRecord) {
      const error = new Error('Post not found');
      error.status = 404;
      throw error;
    }

    await this.commentModel.deleteOne({ _id: oldCommentRecord._id });

    return objectMapper(postRecord, detailedPostDTO);
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

    return objectMapper(postRecord, detailedPostDTO);
  }

  async GetRandomPosts({ count, userId }) {
    const postRecords = await this.postModel.aggregate([
      { $sample: { size: Number(count) } },
      { $match: { user: { $not: { $eq: mongoose.Types.ObjectId(userId) } } } },
    ]);

    await this.postModel.populate(postRecords, { path: 'user' });

    if (!postRecords) {
      const error = new Error('Posts not found');
      error.status = 404;
      throw error;
    }

    const posts = [];

    postRecords.forEach((post) => {
      posts.push(objectMapper(post, postDTO));
    });
    return posts;
  }

  async GetPostComments(postId) {
    const postRecord = await this.postModel.findOne({ _id: postId }).populate({
      path: 'comments',
      populate: 'user',
    });
    const commentsRecords = postRecord.comments;

    if (!postRecord || !commentsRecords) {
      const error = new Error('post not found or post has no comments');
      error.status = 404;
      throw error;
    }

    const comments = [];
    commentsRecords.forEach((comment) => {
      comments.push(objectMapper(comment, commentDTO));
    });

    return comments;
  }
}

module.exports = PostsService;

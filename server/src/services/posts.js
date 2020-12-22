const { Service, Container } = require('typedi');
const objectMapper = require('object-mapper');
const postDTO = require('../mapping/PostDTO');

Service();
class PostsService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
    this.postModel = Container.get('postModel');
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

  async CreatePost({ userId, title, description }) {
    const userRecord = await this.userModel.findOne({ _id: userId }, (error) => {
      if (error) throw error;
    });
    if (!userRecord) {
      const error = new Error('User not found');
      error.status = 400;
      throw error;
    }

    const postRecord = await this.postModel.create({ title, description, user: userRecord });

    await userRecord.posts.push(postRecord);
    await userRecord.save();

    return objectMapper(postRecord, postDTO);
  }

  async GetAllPosts({ userId }) {
    const userRecord = await this.userModel.findOne({ _id: userId }).populate('posts').exec();
    const posts = [];

    userRecord.posts.forEach((post) => {
      posts.push(objectMapper(post, postDTO));
    });

    return posts;
  }
}

module.exports = PostsService;

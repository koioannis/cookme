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

  async CreatePost({ userId, title, description }) {
    const userRecord = await this.userModel.findOne({ _id: userId }, (error, user) => {
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
    const userRecord = await this.userModel.findOne({ _id: userId }).populate('posts');
    const posts = [];

    userRecord.posts.forEach((post) => {
      posts.push(objectMapper(post, postDTO));
    });

    return posts;
  }
}

module.exports = PostsService;

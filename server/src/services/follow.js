const { Service, Container } = require('typedi');

Service();
class FollowService {
  constructor() {
    this.logger = Container.get('logger');
    this.userModel = Container.get('userModel');
  }

  async FollowUser({ userId, userToFollowId }) {
    const userRecord = await this.userModel.findOne({ _id: userId });
    const userToFollowRecord = await this.userModel.findOne({ _id: userToFollowId });

    if (userRecord.following.includes(String(userToFollowRecord._id))) {
      const error = new Error('User is already following that user');
      error.status = 406;
      throw error;
    }

    userRecord.following.push(userToFollowRecord);
    userToFollowRecord.followers.push(userRecord);

    await userRecord.save();
    await userToFollowRecord.save();
  }

  async UnfollowUser({ userId, userToUnfollowId }) {
    const userRecord = await this.userModel.findOne({ _id: userId });
    const userToUnfollowRecord = await this.userModel.findOne({ _id: userToUnfollowId });

    if (!userRecord.following.includes(String(userToUnfollowRecord._id))) {
      const error = new Error('User is not following that user');
      error.status = 406;
      throw error;
    }

    let index = userRecord.following.indexOf(userToUnfollowRecord._id);
    userRecord.following.splice(index, 1);

    index = userToUnfollowRecord.followers.indexOf(userRecord._id);
    userToUnfollowRecord.followers.splice(index, 1);

    await userRecord.save();
    await userToUnfollowRecord.save();
  }

  async GetAllFollowers({ userId }) {
    const userRecord = await this.userModel.findOne({ _id: userId }).populate('followers');

    const followers = [];

    userRecord.followers.forEach((follower) => {
      followers.push({
        id: follower._id,
        username: follower.username,
      });
    });

    return followers;
  }

  async GetAllFollowing({ userId }) {
    const userRecord = await this.userModel.findOne({ _id: userId }).populate('following');

    const following = [];

    userRecord.following.forEach((follower) => {
      following.push({
        id: follower._id,
        username: follower.username,
      });
    });

    return following;
  }
}

module.exports = FollowService;

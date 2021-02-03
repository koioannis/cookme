const BasePrefix = 'api';

const RouteFactory = (version) => {
  const Base = `/${BasePrefix}/${version}`;
  const AuthBase = `${Base}/auth`;
  const AccountBase = `${Base}/account`;
  const PostsBase = `${Base}/posts`;
  const FollowBase = `${Base}/followers`;
  const AdminBase = `${Base}/admin`;

  return {
    Register: `${AuthBase}/register`,
    LogIn: `${AuthBase}/login`,
    LogOut: `${AuthBase}/logout`,
    RefreshToken: `${AuthBase}/refresh`,
    ForgotPassword: `${AccountBase}/forgot-password`,
    ResetPassword: `${AccountBase}/reset-password`,

    CreatePost: `${PostsBase}/post`,
    PostAction: `${PostsBase}/post/:postId`,
    GetAllPosts: `${PostsBase}/get-all-posts/:username`,
    GetRandomPosts: `${PostsBase}/get-random-posts/:count`,
    PostComments: `${PostsBase}/comment/:postId`,
    SingleComment: `${PostsBase}/comment/:postId/:commentId`,

    Follow: `${FollowBase}/:userId`,
    GetAllFollowers: `${FollowBase}/get-all-followers`,
    GetAllFollowing: `${FollowBase}/get-all-following`,

    DeletePost: `${AdminBase}/post/:postId`,
    DeleteComment: `${AdminBase}/comment/:commentId`,

    CreateAccountDescription: `${AccountBase}/description`,
    GetAccountInfo: `${AccountBase}/info/:username`,
  };
};

module.exports = RouteFactory;

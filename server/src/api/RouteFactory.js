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

    CreatePost: PostsBase,
    PostAction: `${PostsBase}/:postId`,
    GetAllPosts: `${PostsBase}/get-all-posts`,
    CreateComment: `${PostsBase}/comment/:postId`,
    Comment: `${PostsBase}/comment/:postId/:commentId`,

    Follow: `${FollowBase}/:userId`,
    GetAllFollowers: `${FollowBase}/get-all-followers`,
    GetAllFollowing: `${FollowBase}/get-all-following`,

    DeletePost: `${AdminBase}/post/:postId`,
    DeleteComment: `${AdminBase}/comment/:commentId`,
  };
};

module.exports = RouteFactory;

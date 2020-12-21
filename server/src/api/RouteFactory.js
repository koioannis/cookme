const BasePrefix = 'api';

const RouteFactory = (version) => {
  const Base = `/${BasePrefix}/${version}`;
  const AuthBase = `${Base}/auth`;
  const AccountBase = `${Base}/account`;
  const PostsBase = `${Base}/posts`;

  return {
    Register: `${AuthBase}/register`,
    LogIn: `${AuthBase}/login`,
    LogOut: `${AuthBase}/logout`,
    RefreshToken: `${AuthBase}/refresh`,
    ForgotPassword: `${AccountBase}/forgot-password`,
    ResetPassword: `${AccountBase}/reset-password`,
    CreatePost: `${PostsBase}/create-post`,
    GetAllPosts: `${PostsBase}/get-all-posts`,
  };
};

module.exports = RouteFactory;

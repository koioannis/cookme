const BasePrefix = 'api';

const RouteFactory = (version) => {
  const Base = `/${BasePrefix}/${version}`;
  const AuthBase = `${Base}/auth`;
  const AccountBase = `${Base}/account`;

  return {
    Register: `${AuthBase}/register`,
    LogIn: `${AuthBase}/login`,
    LogOut: `${AuthBase}/logout`,
    RefreshToken: `${AuthBase}/refresh`,
    ForgotPassword: `${AccountBase}/forgot-password`,
    ResetPassword: `${AccountBase}/reset-password`,
  };
};

module.exports = RouteFactory;

const BasePrefix = '/api';

const Base = `${BasePrefix}/v1`;
const AuthBase = `${Base}/auth`;
const AccountBase = `${Base}/account`;

const ApiRoutes = {
  SignUp: `${AuthBase}/signup`,
  SignIn: `${AuthBase}/signin`,
  SignOut: `${AuthBase}/signout`,
  ForgotPassword: `${AccountBase}/forgot-password`,
  ResetPassword: `${AccountBase}/reset-password`,
};

module.exports = ApiRoutes;

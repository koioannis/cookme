const config = require('../config');

const ApiBaseUrl = config.apiUrl;
const BasePrefix = '/api';

const Base = `${ApiBaseUrl + BasePrefix}/v1`;
const AuthBase = `${Base}/auth`;
const AccountBase = `${Base}/account`;

const ApiRoutes = {
  SignUp: `${AuthBase}/signup`,
  SignIn: `${AuthBase}/signin`,
  Signout: `${AuthBase}/signout`,
  ForgotPassword: `${AccountBase}/forgot-password`,
  ResetPassword: `${AccountBase}/reset-password`,
};

module.exports = ApiRoutes;

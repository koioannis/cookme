import axios from 'axios';

const account = {
  namespaced: true,
  state: {},
  mutation: {},
  getters: {},
  actions: {
    forgotPassword(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/account/forgot-password', {
          email: data.email,
        }, { withCredentials: true })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
    resetPassword(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/account/reset-password', {
          resetPasswordToken: data.resetPasswordToken,
          newPassword: data.newPassword,
          userId: data.userId,
        }, { withCredentials: true })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
};

export default account;

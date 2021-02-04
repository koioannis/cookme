import axios from 'axios';

const account = {
  namespaced: true,
  state: {},
  mutation: {},
  getters: {
    profileInfo(state) {
      return {
        name: state.name,
        description: state.description,
      };
    },
  },
  actions: {
    setAccountInfo(context, data) {
      return new Promise((resolve, reject) => {
        axios.patch('/account/info', {
          firstName: data.firstName,
          lastName: data.lastName,
          description: data.description,
        }, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${context.rootState.auth.accessToken}`,
          },
          withCredentials: true,
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
    getAccountInfo(context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/account/info/${data.username}`,
          { withCredentials: true })
          .then((response) => {
            resolve(response.data.userDetails);
          })
          .catch(() => {
            reject();
          });
      });
    },
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

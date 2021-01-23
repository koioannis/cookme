import axios from 'axios';

const account = {
  namespaced: true,
  state: {},
  mutation: {},
  getters: {},
  actions: {
    forgotPassword(context, data) {
      console.log(data.email);
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
  },
};

export default account;

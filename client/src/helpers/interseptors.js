import axios from 'axios';
import store from '@/store/index';

export default function setup() {
  // eslint-disable-next-line consistent-return
  axios.interceptors.response.use((response) => response, (error) => {
    if (error.response.data.errors.message === 'JsonWebTokenError') {
      return new Promise((resolve) => {
        resolve();
      });
    }
    if (error.response.data.errors.message !== 'TokenExpiredError') {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    store.dispatch('auth/refreshToken')
      .then((token) => {
        const { config } = error;
        console.log(token);
        config.headers.authorization = `Bearer ${token}`;

        return new Promise((resolve, reject) => {
          axios.request(config).then((response) => {
            resolve(response);
          }).catch((errorReq) => {
            reject(errorReq);
          });
        });
      });
  });
}

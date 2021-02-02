import axios from 'axios';
import store from '@/store/index';

export default function setup() {
  // eslint-disable-next-line consistent-return
  axios.interceptors.response.use((response) => response, (error) => {
    if (error.response.data.errors.message === 'JsonWebTokenError') {
      return Promise.resolve();
    }
    if (error.response.data.errors.message !== 'TokenExpiredError') {
      return Promise.reject(error);
    }

    return new Promise((resolve, reject) => {
      store.dispatch('auth/refreshToken')
        .then((token) => {
          const { config } = error;
          config.headers.Authorization = `Berear ${token}`;

          axios.request(config).then((resposne) => {
            resolve(resposne);
          }).catch((errorReq) => {
            reject(errorReq);
          });
        });
    });
  });
}

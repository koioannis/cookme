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

    store.dispatch('auth/refreshToken')
      .then((token) => {
        const { config } = error;
        config.headers.Authorization = `Berear ${token}`;

        return new Promise((resolve, reject) => {
          axios.request(config).then((response) => {
            if (response.config.url === '/auth/logout') {
              localStorage.removeItem('access_token');
              store.commit('auth/destroyToken');
            }
            resolve();
          }).catch((errorReq) => {
            reject(errorReq);
          });
        });
      });
  });
}

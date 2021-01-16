import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import authentication from './modules/authentication';

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export default new Vuex.Store({
<<<<<<< HEAD
=======
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', {
          email: credentials.email,
          password: credentials.password,
        }, {
          withCredentials: true,
        })
          .then((response) => {
            const token = response.data.accessToken;
            console.log(response.cookies);

            localStorage.setItem('access_token', token);
            // context.commit('retrieveToken', token);
            resolve(response);
          })
          .catch((error) => {
            reject(error.response.data.errors.message);
          });
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/register', {
          username: data.username,
          email: data.email,
          password: data.password,
        })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            reject(error.response.data.errors.message);
          });
      });
    },
  },
>>>>>>> e2af0edae58b349d667659410e7f123ca61161c1
  modules: {
    auth: authentication,
  },
});

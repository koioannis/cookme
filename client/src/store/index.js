import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export default new Vuex.Store({
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
        }, { withCredentials: true }, {
          headers: {
            'Access-Control-Allow-Origin': 'http://localhost:8080/',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          },
        })
          .then((response) => {
            const token = response.data.accessToken;
            console.log(response.headers.refreshToken);

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
  modules: {
  },
});

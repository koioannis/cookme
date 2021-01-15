import Vue from 'vue';
import Vuex from 'vuex';

<<<<<<< HEAD
import axios from 'axios';

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
=======
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
  },
  mutations: {
  },
  actions: {
<<<<<<< HEAD
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', {
          email: credentials.email,
          password: credentials.password,
        })
          .then((response) => {
            console.log(response.accessToken);
            const token = response.accessToken;

            localStorage.setItem('access_token', token);
            // /context.commit('retrieveToken', token);
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
=======
>>>>>>> 2bf3593116ba747d168d09f3f2e43f1016ffda66
  },
  modules: {
  },
});

import axios from 'axios';
import authErrorMessages from '../errors';

const authentication = {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('access_token') || null,
    username: localStorage.getItem('username') || 'Άγνωστος',
  },
  mutations: {
    retrieveToken(state, token) {
      state.accessToken = token;
    },
    retrieveUsername(state, username) {
      state.username = username;
    },
    destroyToken(state) {
      state.accessToken = null;
    },
    destroyUsername(state) {
      state.username = 'Άγνωστος';
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken !== null;
    },
    getUsername(state) {
      return state.username;
    },
  },
  actions: {
    login(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/login', {
          email: credentials.email,
          password: credentials.password,
        }, { withCredentials: true })
          .then((response) => {
            const token = response.data.accessToken;
            const name = response.data.data.username;

            localStorage.setItem('access_token', token);
            localStorage.setItem('username', name);

            context.commit('retrieveToken', token);
            context.commit('retrieveUsername', name);
            resolve(response);
          })
          .catch((error) => {
            const message = authErrorMessages(error.response.status);
            reject(message);
          });
      });
    },
    register(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/register', {
          username: data.username,
          email: data.email,
          password: data.password,
        }, { withCredentials: true })
          .then((response) => {
            const token = response.data.accessToken;
            const name = response.data.data.username;

            localStorage.setItem('access_token', token);
            localStorage.setItem('username', name);

            context.commit('retrieveToken', token);
            context.commit('retrieveUsername', name);
            resolve(response);
          })
          .catch((error) => {
            const message = authErrorMessages(error.response.status);
            reject(message);
          });
      });
    },
    logout(context) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/logout', {
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${context.state.accessToken}`,
          },
        })
          .then(() => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('username');
            context.commit('destroyToken');
            context.commit('destroyUsername');
            resolve();
          })
          .catch((error) => {
            console.log('error');
            reject(error);
          });
      });
    },
    refreshToken(context) {
      return new Promise((resolve, reject) => {
        axios.post('/auth/refresh', {
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${context.state.accessToken}`,
          },
        })
          .then((response) => {
            const token = response.data.accessToken;
            console.log(token);

            localStorage.setItem('access_token', token);
            context.commit('retrieveToken', token);
            resolve(token);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
};

export default authentication;

import axios from 'axios';
import authErrorMessages from '../errors';

const authentication = {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('access_token') || null,
    username: localStorage.getItem('username') || 'Άγνωστος',
    admin: localStorage.getItem('isAdmin') || false,
  },
  mutations: {
    retrieveToken(state, token) {
      state.accessToken = token;
    },
    retrieveUsername(state, username) {
      state.username = username;
    },
    retrieveAdmin(state, admin) {
      state.admin = admin;
    },
    destroyToken(state) {
      state.accessToken = null;
    },
    destroyUsername(state) {
      state.username = 'Άγνωστος';
    },
    destroyAdmin(state) {
      state.admin = false;
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken !== null;
    },
    getUsername(state) {
      return state.username;
    },
    getAdmin(state) {
      return state.admin;
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
            const admin = response.data.isAdmin;

            localStorage.setItem('access_token', token);
            localStorage.setItem('username', name);
            localStorage.setItem('isAdmin', admin);

            context.commit('retrieveToken', token);
            context.commit('retrieveUsername', name);
            context.commit('retrieveAdmin', admin);
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
            localStorage.setItem('isAdmin', false);

            context.commit('retrieveToken', token);
            context.commit('retrieveUsername', name);
            context.commit('retrieveAdmin', false);
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
            localStorage.removeItem('username');
            localStorage.removeItem('access_token');
            localStorage.removeItem('isAdmin');
            context.commit('destroyToken');
            context.commit('destroyUsername');
            context.commit('destroyAdmin');
            resolve();
          })
          .catch((error) => {
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

            localStorage.setItem('access_token', token);
            context.commit('retrieveToken', token);
            resolve(token);
          })
          .catch((error) => {
            localStorage.removeItem('access_token');
            localStorage.removeItem('username');
            localStorage.removeItem('isAdmin', false);

            context.commit('destroyToken');
            context.commit('destroyUsername');
            context.commit('destroyAdmin');
            reject(error);
          });
      });
    },
  },
};

export default authentication;

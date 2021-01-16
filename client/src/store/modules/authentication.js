import axios from 'axios';
import authErrorMessages from '../errors';

const authentication = {
  namespaced: true,
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  mutations: {
    retrieveToken(state, token) {
      state.accessToken = token;
    },
  },
  getters: {
    loggedIn(state) {
      return state.accessToken !== null;
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
            console.log(response.cookies);

            localStorage.setItem('access_token', token);
            context.commit('retrieveToken', token);
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
        })
          .then((response) => {
            resolve(response);
          })
          .catch((error) => {
            const message = authErrorMessages(error.response.status);
            reject(message);
          });
      });
    },
  },
};

export default authentication;

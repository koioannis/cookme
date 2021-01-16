import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';
import authentication from './modules/authentication';

Vue.use(Vuex);
axios.defaults.baseURL = 'http://localhost:3000/api/v1';

export default new Vuex.Store({
  modules: {
    auth: authentication,
  },
});

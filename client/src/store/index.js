import Vue from 'vue';
import Vuex from 'vuex';

import authentication from './modules/authentication';
import account from './modules/account';
import posts from './modules/posts';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: authentication,
    account,
    posts,
  },
});

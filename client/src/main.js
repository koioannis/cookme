import Vue from 'vue';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';

import App from './App.vue';
import router from './router';
import store from './store';

import interceptorsSetup from './helpers/interseptors';

axios.defaults.baseURL = 'http://192.168.1.5:3000/api/v1';
interceptorsSetup();

// Install BootstrapVue
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

// Global EventBus -- Communication between Children
const EventBus = new Vue();
export default EventBus;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

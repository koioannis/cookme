import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

import WhoAreWe from '@/components/about/content/WhoAreWe.vue';
import HowItWorks from '@/components/about/content/HowItWorks.vue';
import Terms from '@/components/about/content/Terms.vue';
import Policies from '@/components/about/content/Policies.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children: [{
      path: 'who',
      name: 'who',
      component: WhoAreWe,
    },
    {
      path: 'usage',
      name: 'usage',
      component: HowItWorks,
    },
    {
      path: 'terms',
      name: 'terms',
      component: Terms,
    },
    {
      path: 'policies',
      name: 'policies',
      component: Policies,
    },
    ],
  },
  {
    path: '*',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

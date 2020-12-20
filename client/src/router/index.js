import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Discover from '@/views/Discover.vue';

import WhoAreWe from '@/components/about/ContentSection/WhoAreWe.vue';
import HowItWorks from '@/components/about/ContentSection/HowItWorks.vue';
import Terms from '@/components/about/ContentSection/Terms.vue';
import Policies from '@/components/about/ContentSection/Policies.vue';
import FAG from '@/components/about/ContentSection/FAG.vue';
import Contact from '@/components/about/ContentSection/Contact.vue';

import RecentRecipes from '@/components/discovery/ContentSection/RecentRecipes.vue';
import CertifiedRecipes from '@/components/discovery/ContentSection/CertifiedRecipes.vue';
import PopularRecipes from '@/components/discovery/ContentSection/PopularRecipes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    redirect: '/about/us',
    name: 'About',
    component: About,
    children: [{
      path: 'us',
      name: 'us',
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
    {
      path: 'fag',
      name: 'fag',
      component: FAG,
    },
    {
      path: 'contact',
      name: 'contact',
      component: Contact,
    },
    ],
  },
  {
    path: '/discovery',
    name: 'Discover',
    redirect: '/discovery/recent',
    component: Discover,
    children: [{
      path: 'recent',
      name: 'recent',
      component: RecentRecipes,
    },
    {
      path: 'certified',
      name: 'certified',
      component: CertifiedRecipes,
    },
    {
      path: 'popular',
      name: 'popular',
      component: PopularRecipes,
    },
    {
      path: 'hot',
      name: 'hot',
      component: PopularRecipes,
    },
    ],
  },
  {
    path: '/*',
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

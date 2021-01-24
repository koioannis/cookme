import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';
import About from '@/views/About.vue';
import Discover from '@/views/Discover.vue';
import RecipeViewer from '@/views/RecipeViewer.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';
import ProfileViewer from '@/views/ProfileViewer.vue';

import WhoAreWe from '@/components/about/ContentSection/WhoAreWe.vue';
import HowItWorks from '@/components/about/ContentSection/HowItWorks.vue';
import Terms from '@/components/about/ContentSection/Terms.vue';
import Policies from '@/components/about/ContentSection/Policies.vue';
import FAG from '@/components/about/ContentSection/FAG.vue';
import Contact from '@/components/about/ContentSection/Contact.vue';

import RecipesTemplate from '@/components/discovery/RecipesTemplate.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
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
      component: RecipesTemplate,
    },
    {
      path: 'certified',
      name: 'certified',
      component: RecipesTemplate,
    },
    {
      path: 'popular',
      name: 'popular',
      component: RecipesTemplate,
    },
    {
      path: 'hot',
      name: 'hot',
      component: RecipesTemplate,
    },
    {
      path: 'fast',
      name: 'fast',
      component: RecipesTemplate,
    },
    {
      path: 'cheap',
      name: 'cheap',
      component: RecipesTemplate,
    },
    {
      path: 'difficulty/:id',
      name: 'difficulty',
      component: RecipesTemplate,
    },
    ],
  },
  {
    path: '/view-post/:id',
    name: 'view-post',
    component: RecipeViewer,
  },
  {
    path: '/account-management/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/account/profile/:profileId',
    name: 'profile',
    component: ProfileViewer,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

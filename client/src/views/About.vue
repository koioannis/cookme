<template>
  <div id="about">
    <Navbar style="top: 2%"/>
    <SignTemplate />
    <Instruction />

    <div class="header-wrapper">
      <HeaderInfo />
    </div>

    <div style="background-color: #F7F7F7;">
      <b-row class="about-section">
        <b-col cols="4" sm="4" class="text-md-left navigation-left d-none d-md-block">
          <h4 class="font-weight-bold mb-3 ml-1">
            Τι ψάχνεις ;</h4>
          <div v-for="(value, key) in navItems" :key="key" class="mt-4">
            <router-link :to={path:value.path} class="question-link"
              :class="{'question-link-pressed':(key === currentPage)}">
              {{ value.title }}
            </router-link>
          </div>
        </b-col>
        <b-col sm="8" class="text-md-left text-center pl-5 about-corpus">
          <router-view></router-view>
        </b-col>
      </b-row>
    </div>

    <div style="background-color: #F7F7F7">
      <FooterAbout />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/landing/Navbar.vue';
import HeaderInfo from '@/components/about/HeaderInfo.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';
import Instruction from '@/components/landing/Instruction.vue';
import FooterAbout from '@/components/landing/FooterAbout.vue';

import AboutNavItems from '@/components/about/AboutNavItems.json';

export default {
  name: 'About',
  components: {
    Navbar,
    HeaderInfo,
    SignTemplate,
    Instruction,
    FooterAbout,
  },
  mounted() {
    window.scroll(0, 0);
  },
  updated() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    this.currentPage = this.$router.currentRoute.name;
  },
  data() {
    return {
      navItems: AboutNavItems,
      currentPage: this.$router.currentRoute.name,
    };
  },
};
</script>

<style lang="scss" scoped>
  #about {
    margin: auto;
  }

  .header-wrapper {
    position: relative;
    height: 32em;
  }

  .about-section {
    width: 70%;
    margin: auto;
    padding-top: 8em;
    padding-bottom: 10em;
  }

  .navigation-left {
    margin-top: 5em;
  }

  .about-corpus {
    border-left: 2px solid rgba(201, 201, 201, 0.466);
  }

  .question-link {
    text-decoration: none;
    color: rgb(131, 131, 131);
    padding: 0.4em;
  }

  .question-link:hover {
    opacity: 0.8;
  }

  .question-link-pressed {
    color: white;
    background-color: #F04C84;
    border-radius: 5px;
  }

  @media only screen and (max-width: 700px) {
    .about-section {
      width: 90%;
    }

    .about-corpus {
      border-left: none;
    }
  }
</style>

<template>
  <div class="abs-nav">
  <b-navbar toggleable="md" variant="transparent">
    <b-navbar-brand href="/">
        <img src="@/assets/svg/logo.svg" class="img-logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="mr-lg-3 mr-md-1" href="/discovery">
          <span class="nav-item-style">Ανακάλυψε</span>
        </b-nav-item>
        <b-nav-item @click="$bvModal.show('instruction')"  class="mr-lg-3 mr-md-1">
          <span class="nav-item-style"> Πως λειτουργεί ;</span>
        </b-nav-item>
        <b-button class="custom-button" size="md" @click="signBtnClicked">Σύνδεση</b-button>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
import EventBus from '@/main';

export default {
  name: 'Navbar',
  methods: {
    signBtnClicked() {
      EventBus.$emit('signinOption', true);
      this.$bvModal.show('sign-in');
    },
  },
};
</script>

<style scoped lang="scss">
  .abs-nav {
    position: absolute;
    top: 3%;
    width: 93%;
    z-index: 10;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    .nav-item-style {
      color: #fff;
      opacity: 0.7;
    }

    .img-logo {
      width: 7.5em;
    }
  }

  @media only screen and (max-width: 750px) {
    .navbar-collapse {
      background-color: rgb(255, 255, 255);
      box-shadow: 1px 3px 10px #00000034 !important;
      outline: none;
      border-radius: 5px;
      max-width: 70% !important;
      margin-left: 30%;
    }

    .nav-item-style {
      color: #000 !important;
      opacity: 0.7;
      margin-left: 0.5em;
    }
  }
</style>

<template>
  <div class="abs-nav">
    <b-navbar type="dark" variant="transparent">
      <b-navbar-brand href="#">
        <router-link to="/">
          <img src="@/assets/svg/logo.svg" class="img-logo">
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-nav-item class="mr-lg-3 mr-md-1" href="#">
                <router-link to="/discovery" style="text-decoration: none;">
                  <span class="nav-item-style">Ανακάλυψε</span>
                </router-link>
              </b-nav-item>
              <b-nav-item @click="$bvModal.show('instruction')" class="mr-lg-3 mr-md-1" href="#">
                <span class="nav-item-style"> Πως λειτουργεί ;</span></b-nav-item>
              <b-button class="custom-button" size="md" @click="signBtnClicked">Σύνδεση</b-button>
            </b-nav-form>
          </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <img src="@/assets/svg/logo.svg" style="margin: auto" class="d-md-none d-sm-block"> -->
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

    .img-logo {
      width: 7.5em;
    }

    .nav-item-style {
      color: #fff;
      opacity: 0.7;
    }

    .nav-item-style:hover {
      opacity: 0.9;
    }
  }
</style>

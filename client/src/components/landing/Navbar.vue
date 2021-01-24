<template>
  <div class="abs-nav">
    <b-navbar toggleable="md" class="mt-1 pt-3 pt-md-auto mt-md-auto">
      <b-navbar-brand href="/">
        <img src="@/assets/svg/logo.svg" class="img-logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
       <b-navbar-nav class="ml-auto">
        <b-nav-item class="mr-lg-3 mr-md-1" href="/discovery">
          <span class="nav-item-style">Ανακάλυψε</span>
        </b-nav-item>

        <b-nav-item @click="$bvModal.show('instruction')"  class="mr-lg-2 mr-md-1">
          <span class="nav-item-style"> Πως λειτουργεί ;</span>
        </b-nav-item>

        <b-nav-item-dropdown text="Ερωτήσεις" class="d-block d-md-none dropdown-menu active">
          <b-dropdown-item href="/about/us">Ποιοί είμαστε ;</b-dropdown-item>
          <b-dropdown-item href="/about/terms">Όροι χρήσης</b-dropdown-item>
          <b-dropdown-item href="/about/usage">Πως Λειτουργεί ;</b-dropdown-item>
          <b-dropdown-item href="/about/fag">Ερωτήσεις Χρηστών</b-dropdown-item>
          <b-dropdown-item href="/about/policies">Πολιτική</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-navbar-nav v-if="loggedIn">
          <div class="d-md-flex user-wrapper">
            <b-nav-item-dropdown class="mr-2 mb-2 mb-md-auto profile-menu active"
              :text="getUsername" right>
              <b-dropdown-item href="">Προβολή Προφίλ</b-dropdown-item>
              <b-dropdown-item href="">Προσθήκη συνταγής</b-dropdown-item>
              <b-dropdown-item @click="logout" class="d-md-block d-none">
                Αποσύνδεση</b-dropdown-item>
            </b-nav-item-dropdown>
            <div class="user-img shadow-lg d-none d-md-block"></div>
          </div>
          <b-button class="custom-button d-md-none d-block" size="md"
            @click="logout">Αποσύνδεση</b-button>
        </b-navbar-nav>

        <b-button v-else class="custom-button" size="md"
          @click="signBtnClicked">Σύνδεση</b-button>
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
    logout() {
      this.$store.dispatch('auth/logout')
        .then(() => {
          window.location.reload();
        });
    },
  },
  computed: {
    getUsername() {
      return this.$store.getters['auth/getUsername'];
    },
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
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

    .user-wrapper {
      cursor: pointer;

      .user-img {
        background-image: url('../../assets/svg/account_icon.svg');
        border: 4px solid #D96990;
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100%;
        width: 3em;
        height: 3em;
      }
    }

    .profile-menu {
      font-weight: bold;
      opacity: 0.9;
    }

    .profile-menu:hover {
      opacity: 0.82;
    }

    .dropdown-menu {
      border: none;
      margin-top: -0.5em;
      margin-left: 0.5em;
      margin-right: 0.5em;
      opacity: 0.8;
    }

    ::v-deep .nav-link span, ::after {
      color: #ebebeb;
    }
  }

  @media only screen and (max-width: 750px) {
    .abs-nav {
      top: 0px;
      width: 100%;
      box-shadow: 1px 3px 10px #4e4e4e2a !important;
      height: 12%;
    }

    .nav-item-style {
      color: #000 !important;
      margin-left: 0.5em;
    }

    .navbar-collapse {
      background-color: rgb(255, 255, 255);
      box-shadow: 1px 3px 10px #00000034 !important;
      outline: none;
      border-radius: 5px;
      max-width: 70% !important;
      margin-left: 30%;
    }

    .profile-menu {
      margin-left: 0.5em;
      margin-top: -0.6em;
      font-weight: normal !important;
    }

    ::v-deep .nav-link span, ::v-deep ::after {
      color: rgb(0, 0, 0) !important;
      opacity: 0.9 !important;
    }
  }
</style>

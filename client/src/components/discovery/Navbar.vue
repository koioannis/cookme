<template>
  <div class="nav-wrapper">
    <b-navbar toggleable="md" class="mt-2 mb-2">
      <b-navbar-brand href="/">
       <img src="@/assets/svg/logo.svg" class="img-logo">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-nav-form class="mx-auto d-md-block d-none">
          <div class="search-wrapper p-3 d-flex align-items-center">
            <img src="@/assets/svg/magnifying_glass_dark.svg" class="ml-3 magnifing-glass">
            <form @submit.prevent="findProfile">
              <input type="text" placeholder="Αναζήτηση" class="ml-4"
                autocomplete="off" v-model="search">
                </form>
          </div>
        </b-nav-form>

        <b-navbar-nav v-if="loggedIn" class="d-md-flex d-none">
          <div class="d-md-flex user-wrapper">
            <b-nav-item-dropdown :text="getUsername" right
              class="mr-2 mb-2 mt-1 smb-md-auto profile-menu active font-weight-bold">
              <b-dropdown-item
                :href="'/account/profile/' + getUsername">Προβολή Προφίλ</b-dropdown-item>
              <b-dropdown-item href="/post/create-post">Προσθήκη συνταγής</b-dropdown-item>
              <b-dropdown-item @click="logout" class="d-md-block d-none">
                Αποσύνδεση</b-dropdown-item>
            </b-nav-item-dropdown>
            <div class="user-img shadow-lg d-none d-md-block"></div>
          </div>
        </b-navbar-nav>

        <b-navbar-nav v-else
          @click="$bvModal.show('sign-in')" class="guest-wrapper d-md-flex d-none">
            <span class="font-weight-bold mr-3 mt-2 pt-1">{{getUsername}}</span>
            <div class="user-img shadow-lg"></div>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto d-block d-md-none">
          <b-nav-item class="mt-3 active" href="/about">
            <span class="nav-item-style">Ερωτήσεις</span>
          </b-nav-item>

          <b-nav-item-dropdown text="Φίλτρα" class="mb-3 active">
            <b-dropdown-item v-for="(value, key) in navItems" :key="key" :href="value.path">
              {{ value.title }}
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import FiltertNavItems from '@/components/discovery/FilterNavItems.json';

export default {
  name: 'Navbar',
  data() {
    return {
      navItems: FiltertNavItems,
      search: null,
    };
  },
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
    },
    getUsername() {
      return this.$store.getters['auth/getUsername'];
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
        .then(() => {
          window.location.reload();
        });
    },
    findProfile() {
      this.$router.push({ path: `/account/profile/${this.search}` });
    },
  },
};
</script>

<style lang="scss" scoped>
  .nav-wrapper {
    padding-left: 6% !important;
    padding-right: 6% !important;
    background-color: white;
    box-shadow: 0px 5px 30px #2e2e2e1a !important;
    outline: none;

    .img-logo {
      width: 7.5em;
    }

    .search-wrapper {
      background-color: #EEEEEE;
      width: fit-content;
      border-radius: 30px;

      .magnifing-glass {
        width: 2em;
      }

      input {
        width: 18em;
        border: none;
        background-color: #EEEEEE;
        height: 100%;
        outline: none;

        placeholder {
          color: #191311;
        }
      }
    }

    .dropdown-menu {
      overflow: visible !important;
    }

    .user-img {
      background-image: url('../../assets/svg/account_icon.svg');
      border: 3px solid #c4c4c4a6;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 100%;
      width: 3em;
      height: 3em;
    }

    guest-wrapper:hover {
      cursor: pointer !important;
    }
  }
</style>

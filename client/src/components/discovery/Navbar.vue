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
            <input type="text" placeholder="Αναζήτηση" class="ml-4">
          </div>
        </b-nav-form>

        <b-navbar-nav @click="$bvModal.show('sign-in')" class="guest-wrapper d-md-flex d-none">
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
    };
  },
  computed: {
    getUsername() {
      return this.$store.getters['auth/getUsername'];
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

    .user-img {
      background-image: url('../../assets/small_person.jpg');
      border: 1.3px solid #bdbdbd;
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

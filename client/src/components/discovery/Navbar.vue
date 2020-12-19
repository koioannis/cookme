<template>
  <b-row class="p-3 nav-wrapper">
    <b-col>
      <router-link to="/">
        <img src="@/assets/logo.svg" class="img-logo">
      </router-link>
    </b-col>
    <b-col cols-lg="8" cols-md="6"
      class="d-lg-flex justify-content-center align-items-center d-none">
      <div class="search-wrapper p-3 d-flex align-items-center">
        <img src="@/assets/magnifying_glass_dark.svg" class="ml-3 magnifing-glass">
        <input type="text" placeholder="Αναζήτηση" class="ml-4">
      </div>
    </b-col>
    <b-col class="d-sm-flex align-items-center justify-content-end guest-btn d-none">
      <span class="font-weight-bold mr-3" @click="$bvModal.show('sign-in')">Επισκέπτης</span>
      <div class="user-img shadow-lg"></div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'Navbar',
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
      width: 9em;
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

    .guest-btn {
      span {
        cursor: pointer;
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
    }
  }
</style>

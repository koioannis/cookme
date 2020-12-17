<template>
  <b-row class="p-3 nav-wrapper">
    <b-col>
      <router-link to="/">
        <img src="@/assets/logo.svg" class="img-logo">
      </router-link>
    </b-col>
    <b-col cols="8" class="d-flex justify-content-center align-items-center">
      <div class="search-wrapper p-3 d-flex align-items-center">
        <img src="@/assets/magnifying_glass_dark.svg" class="ml-3 magnifing-glass">
        <input type="text" placeholder="Αναζήτηση" class="ml-4">
      </div>
    </b-col>
    <b-col class="d-flex align-items-center justify-content-end">
      <span class="font-weight-bold mr-3">Επισκέπτης</span>
      <div style="width:20%; height:20%;background-color: #000">a</div>
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
    }

    .search-wrapper input {
      width: 18em;
      border: none;
      background-color: #EEEEEE;
      height: 100%;
      outline: none;
    }

    .search-wrapper input::placeholder {
      color: #191311;
    }
  }
</style>

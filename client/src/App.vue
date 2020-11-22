<template>
  <div id="app" class="whole-page-height">
    <Navbar />
    <b-row class="whole-page-height">
      <b-col col lg="6" md="5">
        <QuoteInfo />
      </b-col>
      <b-col col lg="6" md="7">
        <RightSearch />
      </b-col>
    </b-row>

    <div class="whole-page-height-grey">
      <div class="header-text-wrapper d-flex justify-content-center">
        <img src="./assets/star.svg" alt="star" class="star-img d-none d-sm-block">
        <div class="ml-2 mt-2 h1"><b>Κορυφαίες Συνταγές</b></div>
      </div>
      <RecipeCard class="mt-5" />
    </div>

    <div>
      <RecipeCarousel />
    </div>
  </div>
</template>

<script>
import Navbar from './components/landing/Navbar.vue';
import QuoteInfo from './components/landing/QuoteInfo.vue';
import RightSearch from './components/landing/RightSearch.vue';
import RecipeCard from './components/landing/RecipeCard.vue';
import RecipeCarousel from './components/landing/RecipeCarousel.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    QuoteInfo,
    RightSearch,
    RecipeCard,
    RecipeCarousel,
  },
};
</script>

<style lang="scss">
    html, body {
    margin: 0;
    padding: 0;
    color: #353535;
    height: 100%;
    overflow-x: hidden;

    .whole-page-height {
      height: 100%;
      position: relative;
    }

    .whole-page-height-grey {
      height: 100%;
      background-color: #F7F7F7;
    }
  }
</style>

<style scoped>
  .star-img {
    width: inherit;
  }

  .header-text-wrapper {
    padding-top: 4.5%;
    height: fit-content;
  }
</style>

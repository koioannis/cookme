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

    <div class="whole-page-height-grey d-flex flex-column justify-content-center">
      <div class="header-text-wrapper d-flex justify-content-center">
        <img src="./assets/star.svg" alt="star" class="star-img d-none d-sm-block">
        <div class="ml-2 mt-2 h1"><b>Κορυφαίες Συνταγές</b></div>
      </div>
      <b-row class="card-view-wrapper">
        <b-card-group deck>
          <!-- Need to make the request -->
          <div v-for="item in cardElements" :key="item">
            <RecipeCard class="mt-5" />
          </div>
        </b-card-group>
      </b-row>
    </div>

    <b-row class="carousel-wrapper">
      <b-col md="6">
        <RecipeCarousel />
      </b-col>
      <b-col md="6">
        <div class="looking-description-wrapper">
          <h1><b>Τι ψάχνεις ;</b></h1>
          <div class="lead mt-md-4 mt-sm-2 looking-text">Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Sed, sequi. Lorem ipsum dolor sit, amet con
            sectetur adipisicing elit. Commodi laboriosam vero cum maxime facere incidunt adipisc
            impedit necessitatibus dolor quibusdam fugiat explicabo odio nihil harum ut vel porro
            impedit necessitatibus dolor quibusdam fugiat explicabo odio nihil harum ut vel porro
            impedit necessitatibus dolor quibusdam fugiat explicabo odio nihil harum ut vel porro
            lam hic aliquid! Eum accusamus optio, facere deserunt provident necessitatibus.
            <br />
            <br />
            <small class="looking-description-quote">- Πείνασες; Ετοίμασες! -</small>
          </div>
        </div>
      </b-col>
    </b-row>

    <div class="whole-page-height-grey">

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
  data() {
    return {
      cardElements: 4,
    };
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

<style lang="scss" scoped>
  .star-img {
    width: inherit;
  }

  .header-text-wrapper {
    height: fit-content;
  }

  .card-view-wrapper {
    justify-content: center;
  }

  .carousel-wrapper {
    height: max-content;
  }

  .looking-description-wrapper {
    width: 70%;
    position: relative;
    top: 17%;
    left: 10%;

    .looking-description-quote {
      float: right;
      opacity: 0.9;
    }
  }
</style>

<template>
  <div id="home">
    <Navbar />
    <SignTemplate />
    <Instructions />
    <b-row class="whole-page-height">
      <b-col col lg="6" md="5">
        <LandingInfo />
      </b-col>
      <b-col col lg="6" md="7">
        <RightSearch />
      </b-col>
    </b-row>

    <div class="whole-page-height-grey d-flex flex-column justify-content-center">
      <div class="header-text-wrapper d-flex justify-content-center">
        <img src="@/assets/svg/star.svg" alt="star" class="star-img d-none d-sm-block">
        <div class="ml-3 mt-2 h1"><b>Κορυφαίες Συνταγές</b></div>
      </div>
      <b-row style="margin: auto;">
          <!-- Need to make the request -->
          <b-col md="6" class="mt-5" lg="3" style="width: 23em;margin: auto"
          v-for="(recipe, index) in hotRecipe" :key="index">
            <router-link to="/view-post/123" class="post-link">
              <RecipeCard :hotRecipeInfo="recipe"/>
            </router-link>
          </b-col>
      </b-row>
    </div>

    <div class="carousel-wrapper d-lg-flex">
        <RecipeCarousel class="carousel"/>
        <div class="looking-description-wrapper">
          <h1><b>Τι ψάχνεις ;</b></h1>
          <div class="lead mt-md-3 mt-sm-2 looking-text">Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Sed, sequi. Lorem ipsum dolor sit, amet con
            sectetur adipisicing elit. Commodi laboriosam vero cum maxime facere incidunt adipisc
            impedit necessitatibus dolor quibusdam fugiat explicabo odio nihil harum ut vel porro
            impedit necessitatibus dolor quibusdam fugiat explicabo odio nihil harum ut vel porro
            impedit necessitatibus dolor quibusdam fugiat explicabo odio nihil harum ut vel porro
            lam hic aliquid! Eum accusamus optio, facere deserunt provident necessitatibus.
            <br />
            <small class="looking-description-quote">- Πείνασες; Ετοίμασες! -</small>
          </div>
        </div>
    </div>

    <div style="background-color: #F7F7F7">
      <FooterQuote />
      <FooterAbout />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/landing/Navbar.vue';
import LandingInfo from '@/components/landing/LandingInfo.vue';
import RightSearch from '@/components/landing/RightSearch.vue';
import RecipeCard from '@/components/landing/RecipeCard.vue';
import RecipeCarousel from '@/components/landing/RecipeCarousel.vue';
import FooterQuote from '@/components/landing/FooterQuote.vue';
import FooterAbout from '@/components/landing/FooterAbout.vue';
import Instructions from '@/components/landing/Instruction.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';

import BestRecipes from '@/helpers/temp/BestRecipes.json';

export default {
  name: 'Home',
  components: {
    Navbar,
    LandingInfo,
    RightSearch,
    RecipeCard,
    RecipeCarousel,
    FooterQuote,
    FooterAbout,
    SignTemplate,
    Instructions,
  },
  data() {
    return {
      hotRecipe: BestRecipes,
    };
  },
};
</script>

<style lang="scss" scoped>
  .whole-page-height {
    position: relative;
    height: 48em;
    background-color: white;
    box-shadow: 0px 5px 30px #2e2e2e10 !important;
  }

  .whole-page-height-grey {
    background-color: #F7F7F7;
    padding-top: 5em;
    padding-bottom: 5em;
  }

  .star-img {
    width: inherit;
  }

  .header-text-wrapper {
    height: fit-content;
  }

  .carousel-wrapper {
    height: fit-content;
  }

  .looking-description-wrapper {
    width: 40%;
    position: relative;
    margin: auto;

    .looking-description-quote {
      float: right;
      opacity: 0.9;
    }
  }

  .post-link {
    color: black;
    text-decoration: none;
  }

  .carousel {
    width: 50%;
  }

  @media only screen and (max-width: 1000px) {
    .carousel {
      width: 100%;
    }
    .looking-description-wrapper {
      width: 80%;
      padding-top: 3em;
      padding-bottom: 3em;
    }
  }
</style>

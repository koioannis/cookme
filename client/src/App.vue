<template>
  <div id="app" class="whole-page-height">

    <Navbar />
    <b-row class="whole-page-height">
      <b-col col lg="6" md="5">
        <div class="left-wrapper">
          <div class="quote"><b>Μαγειρέψτε Εύκολα<br />και Γρήγορα</b></div>
          <div class="description mt-md-2">Μοιραστείτε τις αγαπημένες σας συνταγές και
            εμπνευστείτε<br  />από άλλους. Ένα σίτε με στόχο την δημιουργικότητα!</div>
          <b-button size="lg" class="mt-lg-5 mt-sm-3 sign-in">Εγγραγή</b-button>
        </div>
      </b-col>
      <b-col col lg="6" md="7">
        <div class="landing-img">
          <div class="search-wrapper">
            <div class="search-text"><!-- Continue --></div>
          </div>
          <div class="small-quote">Πείνασες ; Ετοίμασες!</div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from './components/landing/Navbar.vue';

export default {
  name: 'app',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">
  body, html {
    margin: 0;
    padding: 0;
    color: #353535;
    height: 100%;
    overflow: hidden;

    .whole-page-height {
      height: 100%;
    }

    .landing-img {
      background-image: url("./assets/Group.svg");
      height: 100%;
      background-position: left;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;

      .small-quote {
        color: #FFFFFF;
        opacity: 0.5;
        position: absolute;
        bottom: 2%;
        right: 2%;
      }
    }

    .left-wrapper {
      margin-top: 32%;
      margin-left: 13%;

      .quote {
        font-size: 3.5em;
        line-height: 1.2em;
      }

      .description {
        opacity: 0.7;
        font-size: 1.4em;
      }

      .sign-in {
        background-color: #F04C84;
        border: none;
      }
    }
  }
</style>

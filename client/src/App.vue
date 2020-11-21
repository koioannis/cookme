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
            <div class="search-wrapper-box">
            <label class="search-text">Ψάξε την αγαπημένη σου συνταγή:</label>
            <div class="search-input-wrapper rounded shadow-lg">
              <img src="./assets/magnifying_glass.svg" class="magnifying-img ml-3" alt="">
              <input class= "search-box ml-3" type="text" name="test" placeholder="Πληκτρολόγισε..">
            </div>
            </div>
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
      background-image: url("./assets/landing_asset.svg");
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

    .search-wrapper-box {
      padding-top: 40%;
      padding-left: 20%;

      .search-text {
        color: #FFFFFF;
        opacity: 0.7;
        font-size: 1.2em;
      }

      .search-input-wrapper {
        background: rgba(255, 255, 255, 0.4);
        width: 60%;

        .magnifying-img {
          width: 7%;
          margin-top: -0.3em;
        }

        .search-box {
          font-size: 1.1em;
          background: rgba($color: #ffffff, $alpha: 0.0);
          color: white;
          opacity: 1;
          border: none;
          width: fit-content;
          height: 4em;
          outline: none;
        }

        .search-box::placeholder {
          color: white;
        }
      }
    }

  }
</style>

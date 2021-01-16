<template>
  <div class="footer-about">
    <img src="@/assets/svg/logo_white.svg" class="logo mt-5" alt="logo">
    <div class="line mt-3"></div>

    <b-row class="about-row mb-5 justify-content-between text-center">
      <b-col md="4" class="mt-3">
          <h4 style="color: #F04C84">Σκοπός μας!</h4>
          <p>Θα θέλαμε να προσφέρουμε κάτι όσο
          μπορούμε και θέλουμε. Ψάχνουμε ανθρώπους
          δημιουργικούς με στόχο το μοίρασμα της
          γνώσης.</p>
          <footer class="blockquote-footer text-left">Η ομάδα μας!</footer>
      </b-col>

      <b-col md="4">
        <h4 class="text-md-center text-left mt-3 mb-2" style="color: #F04C84">Social Media</h4>
        <img src="@/assets/svg/social/facebook_logo.svg" alt="facebook" class="mr-2 social-imgs"/>
        <img src="@/assets/svg/social/facebook_logo.svg" alt="facebook" class="social-imgs"/>
        <img src="@/assets/svg/social/facebook_logo.svg" alt="facebook" class="ml-2 social-imgs" />
      </b-col>

      <b-col md="4">
        <h4 class="text-left mt-3" style="color: #F04C84">FAG</h4>
        <table class="text-left question-table">
          <tr>
            <th><router-link to="/about/us" class="question-link">Ποιοι είμαστε;</router-link></th>
            <th><router-link to="/about/terms" class="question-link">Όροι χρήσης</router-link></th>
          </tr>
          <tr>
            <th>
              <router-link to="/about/usage" class="question-link">Πώς λειτουργεί;</router-link>
            </th>
            <th><router-link to="/about/fag" class="question-link">FAG</router-link></th>
          </tr>
          <tr>
            <th>
              <router-link to="/about/contact" class="question-link">Επικοινωνία</router-link>
            </th>
            <th>
              <router-link to="/about/policies" class="question-link">
              Πολιτική Προστασία</router-link>
            </th>
          </tr>
        </table>
      </b-col>
    </b-row>
    <div class="copywrite-text text-center pt-3 mb-4">
      © 2020 Με επιφύλαξη όλων των δικαιωμάτων.
      Όροι χρήσης, Πολιτική ιδιωτικού απορρήτου και
      Πολιτική περί cookies του CookMe.
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterAbout',
};
</script>

<style lang="scss" scoped>
  .footer-about {
    background-color: rgba(5, 5, 5, 0.993);
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
  }

  .logo {
    width: 18em;
  }

  .about-row {
    align-items: center;
    width: 70%;
  }

  .line {
    width: 80%;
    border-bottom: 1px solid #F04C84;
  }

  .copywrite-text {
    font-size: 0.8em;
    border-top: 0.5px solid #F04C84;
  }

  .social-imgs {
    width: 3.5em;
    cursor: pointer;
  }

  .question-table {
    width: 22em;
  }

  .question-table th {
    opacity: 0.8;
  }

  .question-link {
    text-decoration: none;
    color: white;
  }

  .question-table th:hover {
    opacity: 1;
    cursor: pointer;
  }

  @media only screen and (max-width: 750px) {
    .question-table {
      width: 20em;
    }
  }
</style>

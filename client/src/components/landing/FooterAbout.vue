<template>
  <div class="footer-about">
    <img src="@/assets/logo_white.svg" class="logo mt-5" alt="logo">
    <div class="line mt-3"></div>
    <b-row class="about-row mt-5 mb-5 justify-content-between text-center">
      <b-col md="4">
          Θα θέλαμε να προσφέρουμε κάτι όσο
          μπορούμε και θέλουμε. Ψάχνουμε ανθρώπους
          δημιουργικούς με στόχο το μοίρασμα της
          γνώσης.
          <footer class="blockquote-footer text-left">Η ομάδα μας!</footer>
      </b-col>

      <b-col md="4">
        <div>Social Media</div>
        <b-icon icon="camera" font-scale="3"></b-icon>
        <b-icon icon="heart" font-scale="2.5" class="ml-3"></b-icon>
        <b-icon icon="star" font-scale="2.8" class="ml-3"></b-icon>
      </b-col>

      <b-col md="4">
        <table class="text-left">
          <tr>
            <th>Ποιοι είμαστε ;</th>
            <th>Όροι χρήσης</th>
          </tr>
          <tr>
            <th>Πώς λειτουργεί ;</th>
            <th>Τι θα θέλατε ;</th>
          </tr>
          <tr>
            <th>Επικοινωνία</th>
            <th>Πολιτική Προστασία</th>
          </tr>
        </table>
      </b-col>
    </b-row>
    <div class="copywrite-text pt-3 mb-4">© 2020 Με επιφύλαξη όλων των δικαιωμάτων.
      Όροι χρήσης, Πολιτική ιδιωτικού απορρήτου και
      Πολιτική περί cookies του CookMe.</div>
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
    width: 15%;
  }

  .about-row {
    align-items: center;
    width: 70%;
  }

  .line {
    width: 70%;
    border-bottom: 0.5px solid #F04C84;
  }

  .copywrite-text {
    font-size: 0.8em;
    border-top: 0.5px solid #F04C84;
  }
</style>

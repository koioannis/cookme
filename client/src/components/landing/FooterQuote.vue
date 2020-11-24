<template>
  <b-row class="footer-description flex-column align-items-center">
    <b-icon icon="heart" font-scale="3" style="color: #F04C84" class="mb-3"></b-icon>
    10.489 άτομα
    <blockquote class="blockquote">
      <h4 class="mb-3 text-center">
        Μπείτε και εσεις στην ομάδα μας και μοιραστείτε τις συνταγές<br />
        σας με ολόκληρο τον κόσμο!
      </h4>
      <footer class="blockquote-footer">Η κοινώτητα μας</footer>
    </blockquote>
    <b-button size="lg" class="shadow-sm sign-in">Εγγραγή</b-button>
  </b-row>
</template>

<script>
export default {
  name: 'FooterQuote',
};
</script>

<style lang="scss" scoped>
  .sign-in {
    background-color: #F04C84;
    border: none;
  }

  .footer-description {
    padding-top: 5em;
    padding-bottom: 5em;
  }
</style>

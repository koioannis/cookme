<template>
  <div class="footer-description text-center">
    <b-icon icon="heart" font-scale="3" style="color: #F04C84" class="mb-3"></b-icon>
    <div>10.489 άτομα</div>
    <blockquote class="blockquote">
      <h4 class="mb-3 text-center">
        Μπείτε και εσεις στην ομάδα μας και μοιραστείτε τις συνταγές<br />
        σας με ολόκληρο τον κόσμο!
      </h4>
      <footer class="blockquote-footer text-left">Η κοινώτητα μας</footer>
    </blockquote>
    <b-button @click="signBtnClicked" size="lg" class="custom-button">Εγγραγή</b-button>
  </div>
</template>

<script>
import EventBus from '../../main';

export default {
  name: 'FooterQuote',
  methods: {
    signBtnClicked() {
      EventBus.$emit('signinOption', false);
      this.$bvModal.show('sign-in');
    },
  },
};
</script>

<style lang="scss" scoped>
  .footer-description {
    margin: auto;
    width: 45%;
    padding-top: 5em;
    padding-bottom: 5em;
  }

  @media only screen and (max-width: 750px) {
    .footer-description {
      width: 90%;
    }
  }
</style>

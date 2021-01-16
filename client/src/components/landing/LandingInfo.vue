<template>
  <div class="left-wrapper">
    <div class="quote"><b>Μαγειρέψτε Εύκολα<br />και Γρήγορα</b></div>
    <div class="description mt-md-2">Μοιραστείτε τις αγαπημένες σας συνταγές και
    εμπνευστείτε από άλλους. Ένα σίτε με στόχο την δημιουργικότητα!</div>
    <b-button size="lg" class="shadow-md mt-lg-5 mt-sm-2 mt-3 custom-button"
    @click="signBtnClicked">Εγγραγή</b-button>
  </div>
</template>

<script>
import EventBus from '@/main';

export default {
  name: 'LandingInfo',
  methods: {
    signBtnClicked() {
      EventBus.$emit('signinOption', false);
      this.$bvModal.show('sign-in');
    },
  },
};
</script>

<style scoped lang="scss">
  .left-wrapper {
    margin-top: 28%;
    margin-left: 13%;

    .quote {
      font-size: 3.4em;
      line-height: 1.2em;
    }

    .description {
      opacity: 0.7;
      font-size: 1.2em;
      width: 70%;
    }
  }

  @media only screen and (max-width: 750px) {
    .left-wrapper {
      margin-left: 8%;
    }

    .quote {
      font-size: 2.8em !important;
      line-height: 1.2em;
    }

    .description {
      opacity: 0.7;
      font-size: 0.9em !important;
      width: 100% !important;
    }
  }
</style>

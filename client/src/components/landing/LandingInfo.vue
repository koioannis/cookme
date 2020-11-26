<template>
  <div class="left-wrapper">
    <div class="quote"><b>Μαγειρέψτε Εύκολα<br />και Γρήγορα</b></div>
    <div class="description mt-md-2">Μοιραστείτε τις αγαπημένες σας συνταγές και
    εμπνευστείτε<br  />από άλλους. Ένα σίτε με στόχο την δημιουργικότητα!</div>
    <b-button size="lg" class="shadow-md mt-lg-5 mt-sm-2 custom-button"
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
      }
    }
</style>

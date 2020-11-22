<template>
  <div class="left-wrapper">
    <div class="quote"><b>Μαγειρέψτε Εύκολα<br />και Γρήγορα</b></div>
    <div class="description mt-md-2">Μοιραστείτε τις αγαπημένες σας συνταγές και
    εμπνευστείτε<br  />από άλλους. Ένα σίτε με στόχο την δημιουργικότητα!</div>
    <b-button size="lg" class="shadow-md mt-lg-5 mt-sm-3 sign-in">Εγγραγή</b-button>
  </div>
</template>

<script>
export default {
  name: 'QuoteInfo',
};
</script>

<style scoped lang="scss">
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
</style>

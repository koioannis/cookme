<template>
  <b-modal id="instruction" size="xl" centered ok-only ok-variant="secondary"
  ok-title="Κατάλαβα" hide-header>
    <h2 class="text-uppercase mt-4 mb-5 font-weight-bold text-center"
    style="color: #F15D90">ξεκινα να μαγειρευσεις σε 3 βηματα</h2>

    <b-row class="text-center pt-5 pb-5">
      <b-col md="4">
        <img src="@/assets/svg/instruction/undraw_sign_in_e6hj.svg">
        <p class="mt-5">Ψάξτε τις αγαπημένες σας<br />συνταγές.</p>
        <p class="text-muted mt-5">Βήμα 1</p>
      </b-col>
      <b-col md="4">
        <img src="@/assets/svg/instruction/undraw_people_search_wctu.svg">
        <p class="mt-5">Δημιουργήστε ένα λογαριασμό<br />στην ιστοσελίδα.</p>
        <p class="text-muted mt-5">Βήμα 2</p>
      </b-col>
      <b-col md="4">
        <img src="@/assets/svg/instruction/undraw_cooking_lyxy.svg">
        <p class="mt-5">Ακολουθήστε τα βήματα.<br />Και έτοιμο!</p>
        <p class="text-muted mt-5">Βήμα 3</p>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  name: 'Instruction',
};
</script>

<style scoped>

</style>

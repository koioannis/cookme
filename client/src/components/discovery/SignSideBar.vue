<template>
  <div class="position-fixed d-lg-flex d-none flex-column justify-content-center">
    <div class="font-weight-bold h4 notification-label">Ειδοποιήσεις</div>
    <div class="align-items-center d-flex flex-column text-center">
      <div v-if="logedIn">
        <div class="text-muted signin-info">
          Συνδεθείτε για να μπορείτε να<br />υποστηρίξετε τους φίλους σας.
        </div>
        <b-button size="md" class="custom-button mt-2"
          @click="$bvModal.show('sign-in')">Σύνδεση</b-button>
      </div>
      <div v-else>
        Δεν έχετε καμία ειδοποίηση.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignSideBar',
  computed: {
    logedIn() {
      return this.$store.getters['auth/logedIn'];
    },
  },
};
</script>

<style lang="scss" scoped>
  .signin-info {
    font-size: 1em;
    line-height: 1.3em;
  }

  .notification-label {
    position: absolute;
    top: 5%;
    left: 8%;
  }
</style>

<template>
  <div class="position-fixed">

    <h4 class="font-weight-bold text-center mt-5 pb-2 comment-title">Σχόλια</h4>
    <!-- TODO -->

    <div class="sign-in-info">
      <div class="text-center">
        <div class="text-muted" style="font-size: 0.8em">
          Συνδεθείτε για να μπορείτε να<br>υποστηρίξετε τους φίλους σας.</div>
        <b-button size="sm" class="custom-button mt-2" @click="$bvModal.show('sign-in')">
          Σύνδεση
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentSection',
};
</script>

<style lang="scss" scoped>
  .comment-title {
    border-bottom: 2px solid #EF6D9A;
    width: 50%;
    margin: auto;
  }

  .sign-in-info {
    position: absolute;
    bottom: 20%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin: auto;
  }
</style>

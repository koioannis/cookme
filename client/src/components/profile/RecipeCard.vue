<template>
  <b-card no-body>
    <div class="recipe-preview-img"></div>
    <b-card-body>
      <div class="d-flex justify-content-between">
        <div class="h5">Σαλάτα Καντή</div>
        <div class="small mt-1">3/5</div>
      </div>
      <div class="description">Μια σαλάτα που θα σας κάνει να
        γλύφετε μέχρι και το τελευταίο δάκτυλο σας.</div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'RecipeCard',
};
</script>

<style lang="scss" scoped>
  .recipe-preview-img {
    background-image: url('../../assets/small_food1.jpg');
    background-size: cover;
    will-change: transform;
    background-repeat: no-repeat;
    height: 22em;

    background-position-y: -3em;
  }

  .description {
    font-size: 0.8em;
    opacity: 0.8;
  }
</style>

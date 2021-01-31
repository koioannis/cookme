<template>
  <b-card no-body>
    <div class="recipe-preview-img"></div>
    <b-card-body>
      <div class="d-flex justify-content-between">
        <div class="h5 recipe-title">{{post.title}}</div>
        <div class="small mt-1">{{post.grade}}/5</div>
      </div>
      <div class="description">
        {{post.description}}
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  props: [
    'post',
  ],
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

  .recipe-title {
    overflow: hidden;
    width: 10em;
    white-space: nowrap;
  }

  .description {
    font-size: 0.8em;
    opacity: 0.8;
  }
</style>

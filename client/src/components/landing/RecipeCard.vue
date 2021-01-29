<template>
  <b-card no-body style="width: fit-content">
    <template #header>
      <div class="d-flex ml-1 user-info">
        <div class="user-img shadow-lg"></div>
        <div class="user-cred ml-2">
          <b>{{hotRecipeInfo.user.name}}</b>
          <p class="small">{{hotRecipeInfo.user.title}}</p>
        </div>
      </div>
    </template>

    <div class="recipe-preview-img"></div>

    <b-card-body>
      <div class="d-flex justify-content-between">
        <div class="h5">{{hotRecipeInfo.title}}</div>
        <div class="small mt-1">{{hotRecipeInfo.grade}}/5</div>
      </div>
      <div class="description">{{hotRecipeInfo.description}}</div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: [
    'hotRecipeInfo',
  ],
};
</script>

<style lang="scss" scoped>
  .user-info {
    margin-bottom: -0.6em;

    .user-img {
      background-image: url('../../assets/svg/account_icon.svg');
      border: 2px solid #999999;
      background-repeat: no-repeat;
      background-size: cover;
      border-radius: 100%;
      width: 3em;
      height: 3em;
      overflow: hidden;
    }
  }

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

<template>
  <b-card no-body>
    <template #header>
      <div class="d-flex ml-1 user-info">
        <div class="user-img shadow-lg"></div>
        <div class="user-cred ml-2">
          <router-link :to="'/account/profile/'+recentRecipesInfo.user.username" class="post-link">
            <b>{{recentRecipesInfo.user.username}}</b>
            <p class="small">Επαγκελματίας μάγειρας</p>
          </router-link>
        </div>
      </div>
    </template>

    <router-link :to="'/post/view-post/' + recentRecipesInfo.id" class="post-link">
      <div class="recipe-preview-img"></div>

      <b-card-body>
        <div class="d-flex justify-content-between">
          <div class="h5 recipe-title">{{recentRecipesInfo.title}}</div>
          <div class="small mt-1">{{recentRecipesInfo.grade}}/5</div>
        </div>
        <div class="description">{{recentRecipesInfo.description}}</div>
      </b-card-body>
    </router-link>
  </b-card>
</template>

<script>
export default {
  name: 'RecipeCard',
  props: [
    'recentRecipesInfo',
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

  .recipe-title {
    overflow: hidden;
    width: 10em;
    white-space: nowrap;
  }

  .description {
    font-size: 0.8em;
    opacity: 0.8;
    height: 3em;
    overflow: hidden;
  }

  .post-link {
    color: black;
    text-decoration: none;
  }
</style>

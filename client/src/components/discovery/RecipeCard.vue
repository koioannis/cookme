<template>
  <b-card class="card-wrapper" no-body>
    <template #header>
      <div class="d-flex ml-1 user-info">
        <div class="user-img shadow-lg"></div>
        <div class="user-cred ml-2">
          <b>Μαρία Γεωργίου</b>
          <p class="small">Επαγγελματίας Μάγειρας</p>
        </div>
      </div>
    </template>

    <div class="recipe-preview-img"></div>

    <b-card-body>
      <div class="d-flex justify-content-between">
        <div class="h5">Σαλάτα Μποέμι</div>
        <div class="small mt-1">4.3/5</div>
      </div>
      <div class="description">
        Μια σαλάτα που θα σας κάνει να γλύφετε
        μέχρι και το τελευταίο δάκτυλο σας.
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'RecipeCard',
};
</script>

<style lang="scss" scoped>
  .card-wrapper {
    width: 20em;

    .user-info {
      margin-bottom: -0.6em;

      .user-img {
        background-image: url('../../assets/svg/account_icon.svg');
        border: 2px solid #bdbdbd;
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
      height: 12em;

      background-position-y: -3em;
    }

    .description {
      font-size: 0.8em;
      opacity: 0.8;
    }
  }
</style>

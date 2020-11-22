<template>
  <b-row class="card-view-wrapper">
    <b-card-group deck>
      <b-card no-body style="max-width: 20rem;">
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

      <b-card class="ml-5" no-body style="max-width: 20rem;">
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

      <b-card class="ml-5" no-body style="max-width: 20rem;">
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

      <b-card class="ml-5" no-body style="max-width: 20rem;">
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
    </b-card-group>
  </b-row>
</template>

<script>
export default {
  name: 'RecipeCard',
};
</script>

<style lang="scss" scoped>

  .card-view-wrapper {
    justify-content: center;

    .user-info {
      margin-bottom: -0.6em;

      .user-img {
        background-image: url('../../assets/person2.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        border: 2px solid #bdbdbd;
        border-radius: 100%;
        width: 3em;
        height: 3em;
        overflow: hidden;
      }
    }

    .recipe-preview-img {
      background-image: url('../../assets/food1.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      height: 22em;

      background-position-y: -3em;
    }

    .description {
      font-size: 0.8em;
      opacity: 0.8;
    }
  }
</style>

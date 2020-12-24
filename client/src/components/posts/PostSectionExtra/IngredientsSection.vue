<template>
  <div id="ingredient-section">
    <div class="d-flex pr-2 pt-3 pb-2 user-info text-right justify-content-end">
      <div class="user-cred ml-2">
        <b>Άκης Πετρετζίκης</b>
        <p class="small">Επαγγελματίας Μάγειρας</p>
      </div>
      <div class="user-img shadow-lg ml-3"></div>
    </div>

    <!-- <iframe src="https://www.youtube.com/embed/y5n7xpnHd4Y" frameborder="0" allow="accelerometer;
      encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width: 100%"
      class="mb-2 youtube-video pt-3"></iframe> -->

    <div class="d-flex ingredients-header align-items-center pt-2 pb-2">
      <img src="@/assets/svg/ingredients.svg">
      <h3 class="ml-3 mt-1 ingredients-title"><b>Υλικά</b></h3>
      <h4 class="ml-auto mt-2 pr-3"><b>30€</b></h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IngredientsSection',
};
</script>

<style lang="scss" scoped>
  #ingredient-section{

    .youtube-video {
      border-top: 3px solid #EF6D9A;
    }
    .user-info {
      font-size: 1.1em;
      border-top: 3px solid #EF6D9A;

        .user-img {
          background-image: url('../../../assets/small_person.jpg');
          border: 2px solid #bdbdbd;
          background-repeat: no-repeat;
          background-size: cover;
          border-radius: 100%;
          width: 3em;
          height: 3em;
          overflow: hidden;
        }
      }

    .ingredients-header {
      border-top: 3px solid #EF6D9A;
      border-bottom: 3px solid #EF6D9A;

      h3 {
        color: #EF5C8E;
      }

      h4 {
        color: #202020e0;
      }
    }
  }
</style>

<template>
  <div id="ingredient-section">
    <div class="d-flex pr-2 pt-3 pb-2 user-info text-right justify-content-end">
      <div class="user-cred ml-2">
        <b>Μαρία Γεωργίου</b>
        <p class="small">Επαγγελματίας Μάγειρας</p>
      </div>
      <div class="user-img shadow-lg ml-3"></div>
    </div>

    <div class="d-flex ingredients-header align-items-center pt-2 pb-2">
      <img src="@/assets/svg/ingredients.svg">
      <h3 class="ml-3 mt-1 ingredients-title"><b>Υλικά</b></h3>
      <h5 class="ml-auto mt-2 pr-3"><b>€€€</b></h5>
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
    width: 65%;

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

      h5 {
        color: #676767;
      }
    }
  }
</style>

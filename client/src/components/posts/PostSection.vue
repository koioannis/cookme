<template>
  <div class="mt-5 ml-5">
    <b-row>
      <b-col cols="8">
        <div class="d-flex justify-content-between" style="width: 90%">
          <h3 class="pb-3 recipe-title"><b>Μακαρόνια Μπογιαμπες</b></h3>
          <div class="pb-3">asd</div>
        </div>
        <img src="@/assets/carousel/image_1.jpg" style="width: 90%"
          class="shadow-lg mt-4 rounded">

          <div class="description mt-4 mb-4">
            <h5 class="mt-4"><b>Περιγραφή</b></h5>
            <div>
              Μέσο της μαγειρικής ανακαλύπτεις τις διάφορες ικανότητες σου.
              Το σίτε αυτό σου προσφέρει μια δυνατότητα ή ένα πάτημα για να ξεκλειδώσεις
              τις κρυμμένες ικανότητες που έχεις.
            </div>
          </div>

          <div class="recipe-steps">
            <h5 class="recipe-steps-title"><b>Βήματα</b></h5>
            <div>
              Μέσο της μαγειρικής ανακαλύπτεις τις διάφορες ικανότητες σου.
              Το σίτε αυτό σου προσφέρει μια δυνατότητα ή ένα πάτημα για να ξεκλειδώσεις
              τις κρυμμένες ικανότητες που έχεις.
              Μέσο της μαγειρικής ανακαλύπτεις τις διάφορες ικανότητες σου.
              Το σίτε αυτό σου προσφέρει μια δυνατότητα ή ένα πάτημα για να ξεκλειδώσεις
              τις κρυμμένες ικανότητες που έχεις.
            </div>
          </div>
      </b-col>

      <b-col class="mt-5 pt-5">
        <div class="d-flex ingredients align-items-center pt-2 pb-2">
          <img src="@/assets/svg/ingredients.svg">
          <h3 class="ml-3 mt-1 ingredients-title"><b>Υλικά</b></h3>
          <h5 class="ml-auto mt-2 pr-3" style="color: #F19721"><b>€€€</b></h5>
        </div>

        <b-row class="mt-4 text-center" style="width: 65%">
          <b-col class=""><b><u>Όνομα</u></b></b-col>
          <b-col><b><u>Ποσότητα</u></b></b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PostSection',
};
</script>

<style lang="scss" scoped>
  .recipe-title {
    white-space: nowrap;
    border-bottom: 2px solid #EF6D9A;
    width: 28%;
  }

  .ingredients {
    width: 65%;
    border-top: 3px solid #EF6D9A;
    border-bottom: 3px solid #EF6D9A;

     .ingredients-title {
       color: #EF5C8E;
     }
  }
</style>

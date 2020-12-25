<template>
  <div id="ingredient-section" class="mt-lg-5 pt-5 ml-4">
    <div class="pr-2 pt-3 pb-2 user-info text-right justify-content-end d-none d-lg-flex">
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

    <table class="table table-striped mt-4 text-center">
      <thead>
        <tr>
          <th scope="col"><u>Όνομα</u></th>
          <th scope="col"><u>Ποσότητα</u></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="idx in ingredCount" :key="idx">
          <th class="d-flex align-items-center">
            <input type="checkbox" id="check" class="mr-3" style="cursor: pointer"/>
            <div for="check" class="strikethrough">Κακάο</div>
          </th>
          <td>200gr</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'IngredientsSection',
  data() {
    return {
      ingredCount: 8,
    };
  },
};
</script>

<style lang="scss" scoped>
  #ingredient-section {
    width: 65%;

    .youtube-video {
      border-top: 3px solid #EF6D9A;
    }
    .user-info {
      font-size: 1.1em;
      border-top: 3px solid #EF6D9A;

        .user-img {
          background-image: url('../../assets/small_person.jpg');
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

    input[type=checkbox]:checked + div.strikethrough{
      text-decoration: line-through;
    }
  }

  @media only screen and (max-width: 1400px) {
    #ingredient-section {
      width: 80%;
    }
  }

  @media only screen and (max-width: 1000px) {
    #ingredient-section {
      width: 60%;
    }
  }
</style>

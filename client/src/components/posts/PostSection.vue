<template>
  <div class="mt-5 ml-5">
    <b-row>
      <b-col lg="8">
        <RecipeBody />
      </b-col>

      <b-col class="mt-5 pt-4 d-lg-block d-none">
        <div id="ingredient-wrapper">
          <IngredientsSection />

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
      </b-col>
    </b-row>
  </div>
</template>

<script>
import IngredientsSection from '@/components/posts/PostSectionExtra/IngredientsSection.vue';
import RecipeBody from '@/components/posts/PostSectionExtra/RecipeBody.vue';

export default {
  name: 'PostSection',
  components: {
    IngredientsSection,
    RecipeBody,
  },
  data() {
    return {
      ingredCount: 8,
    };
  },
};
</script>

<style lang="scss" scoped>
  #ingredient-wrapper {
    width: 65%;

    input[type=checkbox]:checked + div.strikethrough{
      text-decoration: line-through;
    }
  }

  @media only screen and (max-width: 1400px) {
    #ingredient-wrapper {
      width: 80%;
    }
  }
</style>

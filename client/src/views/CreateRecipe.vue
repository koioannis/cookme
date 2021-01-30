<template>
  <div id="create-post">
    <!-- TODO: add meta to router -->
    <Navbar class="fixed-top"/>

    <div class="create-post-wrapper">
      <b-row class="content-wrapper">
        <b-col md="7" lg="9" class="ml-sm-5 d-none d-md-block">
          <b-row>
            <b-col lg="8" class="mb-4 mb-md-auto">
              <RecipeBody :title="title" :description="description" :steps="steps"/>
            </b-col>
            <b-col class="pt-4 d-sm-block d-none">
              <IngredientsSection :estimatedCost="estimatedCost" :ingredients="ingredients" />
            </b-col>
          </b-row>
        </b-col>
        <b-col>
          <PostEditor class="side-bar fixed-left"
            @updateTitle="updateTitle"
            @updateDescription="updateDescription"
            @updateSteps="updateSteps"
            @updateEstimatedCost="updateEstimatedCost"
            @updateIngredients="updateIngredients" />
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';

import IngredientsSection from '@/components/create_post/preview/IngredientsSection.vue';
import RecipeBody from '@/components/create_post/preview/RecipeBody.vue';
import PostEditor from '@/components/create_post/PostEditor.vue';

export default {
  name: 'CreateRecipe',
  components: {
    Navbar,
    IngredientsSection,
    RecipeBody,
    PostEditor,
  },
  data() {
    return {
      title: 'Τίτλος',
      description: 'Εδώ μπορείτε να γράψετε μια σύντομη περιγραφή.',
      estimatedCost: '--',
      ingredients: null,
      // eslint-disable-next-line no-array-constructor
      steps: new Array('Έδω μπαίνει το πρώτο βήμα.', 'Έδω μπαίνει το δεύτερο.'),
    };
  },
  methods: {
    updateTitle(param) {
      this.title = param;
    },
    updateDescription(param) {
      this.description = param;
    },
    updateSteps(param) {
      this.steps = param;
    },
    updateEstimatedCost(param) {
      this.estimatedCost = param;
    },
    updateIngredients(param) {
      this.ingredients = param;
    },
  },
};
</script>

<style lang="scss" scoped>
  #create-post{
    height: 100%;

    .create-post-wrapper {
      margin-top: 5.9em;
    }

    .content-wrapper {
        height: inherit;

        .side-bar {
          background-color: #F7F7F7;
          height: 100%;
          width: 100%;
        }
      }
  }
</style>

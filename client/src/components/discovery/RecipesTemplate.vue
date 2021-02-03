<template>
  <b-container>
    <div id="profile" class="text-center" style="opacity: 0.9"
      v-if="waiting == -1">
      <b-spinner label="Loading..." class="mt-5"></b-spinner>
    </div>

    <div v-else-if="waiting === 1">
      <h3 class="font-weight-bold mt-md-5 mt-4 mb-2
        pb-3 category-title">{{navItems[currentPage].title}}</h3>
      <b-row align-h="around" style="margin: auto">
        <div v-for='(recipe, item) in recipesInfo' :key='item'>
          <RecipeCard :recipe="recipe" class="mt-4 ml-md-4"/>
        </div>
      </b-row>
    </div>

    <div v-else class="text-center text-muted mt-5">
      Δεν υπάρχουν δημοσιέυσεις.
    </div>
  </b-container>
</template>

<script>
import RecipeCard from '@/components/discovery/RecipeCard.vue';
import FiltertNavItems from '@/components/discovery/FilterNavItems.json';

export default {
  name: 'ContentTemplate',
  components: {
    RecipeCard,
  },
  props: [
    'currentPage',
  ],
  data() {
    return {
      waiting: -1,
      recipesInfo: null,
      navItems: FiltertNavItems,
    };
  },
  created() {
    this.$store.dispatch('posts/getRandomPosts', { count: 15 })
      .then((response) => {
        if (response.leght !== null) {
          this.recipesInfo = response;
          this.waiting = 1;
        }
      });
  },
};
</script>

<style lang="scss" scoped>
  .category-title {
    border-bottom: 2px #F15D90 solid;
    width: fit-content;
  }

  @media only screen and (max-width: 750px) {
    .category-title {
      margin: auto;
    }
  }
</style>

<template>
  <b-container>
    <h3 class="font-weight-bold mt-md-5 mt-4 mb-2
      pb-3 category-title">{{navItems[currentPage].title}}</h3>
    <b-row align-h="around" style="margin: auto">
      <div v-for='item in maxNumberOfRecipes' :key='item'>
        <router-link to="/post/view-post/123" class="post-link">
          <RecipeCard class="mt-4 ml-md-4"/>
        </router-link>
      </div>
    </b-row>
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
      maxNumberOfRecipes: 15,
      navItems: FiltertNavItems,
    };
  },
};
</script>

<style lang="scss" scoped>
  .category-title {
    border-bottom: 2px #F15D90 solid;
    width: fit-content;
  }

  .post-link {
    color: black;
    text-decoration: none;
  }

  @media only screen and (max-width: 750px) {
    .category-title {
      margin: auto;
    }
  }
</style>

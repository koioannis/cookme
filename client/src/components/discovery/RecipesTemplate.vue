<template>
  <b-container>
    <h3 class="font-weight-bold mt-5 mb-2 pb-3 category-title">{{navItems[currentPage].title}}</h3>
    <b-row align-h="around" style="margin: auto">
      <div v-for='item in maxNumberOfRecipes' :key='item'>
        <RecipeCard class="mt-4 ml-4"/>
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
</style>

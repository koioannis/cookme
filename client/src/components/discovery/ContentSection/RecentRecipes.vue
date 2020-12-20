<template>
  <b-container>
    <h3 class="font-weight-bold mt-5 mb-2 pb-3 category-title">Κορυφέες Συνταγές</h3>
    <b-row align-h="around" style="margin: auto">
      <div v-for='item in maxNumberOfRecipes' :key='item'>
        <RecipeCard class="mt-4 ml-4"/>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import RecipeCard from '@/components/discovery/RecipeCard.vue';

export default {
  name: 'RecentRecipes',
  components: {
    RecipeCard,
  },
  data() {
    return {
      maxNumberOfRecipes: 11,
    };
  },
};
</script>

<style lang="scss" scoped>
  .category-title {
    border-bottom: 2px #F15D90 solid;
    width: 40%;
  }
</style>

<template>
  <div class="position-fixed">
    <div class="title-wrapper">
      <div class="title pb-1 mb-4 mt-5 d-flex">
        <h4 class="mr-auto font-weight-bold">Φίλτρα</h4>
        <img src="@/assets/filter_icon.svg" style="width: 1.7em">
      </div>
    </div>

    <div class="filters-wrapper text-center">
      <div v-for="(value, key) in navItems" :key="value" class="filters">
        <router-link :to={path:value.path} class="pt-3 pb-3 filters-link"
          :class="{'filter-pressed':(key === currentPage)}">
          {{ value.title }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import FiltertNavItems from '@/components/discovery/FilterNavItems.json';

export default {
  name: 'FiltersBar',
  props: [
    'currentPage',
  ],
  data() {
    return {
      navItems: FiltertNavItems,
    };
  },
};
</script>

<style lang='scss' scoped>
  .title-wrapper {
    margin: auto;
    width: 80%;

    .title {
      border-bottom: 3px solid #EF6D9A;
    }
  }

  .filters-wrapper {
    font-size: 1.1em;

    .filter-pressed {
      background-color: #D8D8D8;
    }

    .filters-link {
      display: inline-block;
      width: 100%;
      color: black;
      text-decoration: none;
    }

    .filters:hover {
      background-color: #d8d8d850;
      cursor: pointer;
    }
  }
</style>

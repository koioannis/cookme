<template>
  <div class="position-fixed">
    <div class="title-wrapper">
      <div class="title pb-1 mb-4 mt-5 d-flex">
        <h4 class="mr-auto font-weight-bold">Φίλτρα</h4>
        <img src="@/assets/svg/filter_icon.svg" style="width: 1.7em">
      </div>
    </div>

    <div class="filters-wrapper text-center">
      <div v-for="(value, key) in navItems" :key="key" class="filters">
        <router-link :to={path:value.path} class="pt-3 pb-3 filters-link"
          :class="{'filter-pressed':(key === currentPage)}">
          {{ value.title }}
        </router-link>

        <div v-if="value.children&&key === currentPage">
          <div v-for="(sub_value, key) in value.children" :key="key" class="filters">
            <router-link :to={path:sub_value.path} class="pt-2 pb-2 filters-link"
              :class="{'filter-pressed':(key === currentPage)}">
              {{ sub_value.title }}
            </router-link>
          </div>
        </div>
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
      opacity: 0.96;
      text-decoration: none;
    }

    .filters:hover {
      background-color: #d8d8d850;
      cursor: pointer;
    }
  }
</style>

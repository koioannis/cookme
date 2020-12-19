<template>
  <div id="discovery">
    <SignTemplate />

    <Navbar class="fixed-top"/>
    <b-row class="content-wrapper">
      <b-col class="d-none d-lg-block">
        <div class="side-bar position-fixed">
          asd
        </div>
      </b-col>

      <b-col cols="7" class="mb-5">
        <b-container>
          <h3 class="font-weight-bold mt-5 mb-2 pb-3 category-title">Κορυφέες Συνταγές</h3>
          <b-row align-h="left" style="margin: auto">
            <div v-for='item in maxNumberOfRecipes' :key='item'>
              <RecipeCard class="mt-4 ml-4"/>
            </div>
          </b-row>
        </b-container>
      </b-col>

      <b-col>
        <SignSideBar class="side-bar"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';
import RecipeCard from '@/components/discovery/RecipeCard.vue';
import SignSideBar from '@/components/discovery/SignSideBar.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';

export default {
  name: 'Discover',
  components: {
    Navbar,
    SignTemplate,
    RecipeCard,
    SignSideBar,
  },
  data() {
    return {
      maxNumberOfRecipes: 10,
    };
  },
};
</script>

<style lang='scss' scoped>
  #discovery {
    height: 100%;

    background-color: #EEEEEE;

    .content-wrapper {
      height: inherit;
      margin-top: 5.9em;

      .side-bar {
        background-color: #F7F7F7;
        height: 100%;
        width: 20%;
      }

      .category-title {
        border-bottom: 2px #F15D90 solid;
        width: 40%;
      }
    }
  }
</style>

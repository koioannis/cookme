<template>
  <div id="discovery">
    <SignTemplate />

    <Navbar class="fixed-top"/>
    <b-row class="content-wrapper">
      <b-col class="d-none d-lg-block">
        <FiltersBar :currentPage="currentPage" class="side-bar"/>
      </b-col>

      <b-col cols="7" class="mb-5">
        <router-view :currentPage="currentPage"></router-view>
      </b-col>

      <b-col>
        <SignSideBar class="side-bar"/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';
import FiltersBar from '@/components/discovery/FiltersBar.vue';
import SignSideBar from '@/components/discovery/SignSideBar.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';

export default {
  name: 'Discover',
  components: {
    Navbar,
    SignTemplate,
    FiltersBar,
    SignSideBar,
  },
  updated() {
    this.currentPage = this.$router.currentRoute.name;
  },
  data() {
    return {
      currentPage: this.$router.currentRoute.name,
    };
  },
};
</script>

<style lang='scss' scoped>
  body {
    background-color: #EEEEEE;

    #discovery {
      height: 100%;

      .content-wrapper {
        height: inherit;
        margin-top: 5.9em;

        .side-bar {
          background-color: #F7F7F7;
          height: 100%;
          width: 20%;
        }
      }
    }
  }
</style>

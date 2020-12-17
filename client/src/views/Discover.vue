<template>
  <div id="discovery">
    <Navbar />

    <b-row style="height: 30em">
      <b-col></b-col>
      <b-col></b-col>
      <b-col></b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';

export default {
  name: 'Discover',
  components: {
    Navbar,
  },
};
</script>

<style lang='scss' scoped>
  #discovery {
    background-color: #EEEEEE;
  }
</style>

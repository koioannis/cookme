<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss">
  html, body {
    margin: 0;
    padding: 0;
    color: #353535;
    overflow-x: hidden;
    padding-right: 0px !important;

    .custom-button {
      background-color: #F04C84;
      border: none;
    }
    .custom-button:hover {
      background-color: rgb(224, 57, 113);
    }
    .custom-button:active, .custom-button:focus {
      box-shadow: 1px 1px 6px #f73e7cad !important;
      outline: none;
      background-color: rgb(224, 57, 113) !important;
    }
  }
</style>

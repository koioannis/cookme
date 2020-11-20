<template>
  <div class="abs-nav">
    <b-navbar class="abs-navbar" type="dark" variant="transparent">
    <b-navbar-brand href="#">
      <img src="../../assets/logo.svg" class="img-logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-nav-item class="mr-lg-3 mr-md-1" href="#"><span class="nav-item-style">
            Ανακάλυψε</span></b-nav-item>
          <b-nav-item class="mr-lg-3 mr-md-1" href="#"><span class="nav-item-style">
            Πως λειτουργεί ;</span></b-nav-item>
          <b-button class="sign-in-btn" size="md">Σύνδεση</b-button>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped lang="scss">
  .abs-nav {
    position: absolute;
    top: 3%;
    width: 93%;
    z-index: 10;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    .img-logo {
      width: 7.5em;
    }

    .nav-item-style {
      color: #fff;
      opacity: 0.7;
    }

    .nav-item-style:hover {
      opacity: 0.9;
    }

    .sign-in-btn {
      background-color: #F04C84;
      border: none;
    }
  }
</style>

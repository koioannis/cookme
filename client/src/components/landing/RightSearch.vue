<template>
  <div class="landing-img">
    <div class="search-wrapper">
      <div class="search-wrapper-box">
        <label class="search-text">Ψάξε την αγαπημένη σου συνταγή:</label>
        <div class="search-input-wrapper rounded shadow-lg d-flex">
          <img src="@/assets/svg/magnifying_glass.svg" class="magnifying-img ml-3 " alt="">
          <form @submit.prevent="findProfile">
            <input class="search-box ml-3" type="text" v-model="search"
              name="test" placeholder="Πληκτρολόγισε.." autocomplete="off">
          </form>
        </div>
      </div>
    </div>
    <div class="small-quote">Πείνασες ; Ετοίμασες!</div>
  </div>
</template>

<script>
export default {
  name: 'RightSearch',
  data() {
    return {
      search: null,
    };
  },
  methods: {
    findProfile() {
      this.$router.push({ path: `/account/profile/${this.search}` });
    },
  },
};
</script>

<style scoped lang="scss">
  .landing-img {
    background-image: url('../../assets/svg/landing_asset.svg');
    height: 100%;
    background-position: left;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    .small-quote {
      color: #FFFFFF;
      opacity: 0.5;
      position: absolute;
      bottom: 2%;
      right: 2%;
    }
  }

  .search-wrapper-box {
    padding-top: 35%;
    padding-left: 20%;

    .search-text {
      color: #FFFFFF;
      opacity: 0.7;
      font-size: 1.1em;
    }

    .search-input-wrapper {
      background: rgba(255, 255, 255, 0.4);
      width: 25em;

      .magnifying-img {
        width: 7%;
        margin-top: -0.3em;
      }

      .search-box {
        font-size: 1.1em;
        background: rgba($color: #ffffff, $alpha: 0.0);
        color: white;
        opacity: 1;
        border: none;
        width: 80%;
        height: 4em;
        outline: none;
      }

      .search-box::placeholder {
        color: white;
      }
    }
  }

  @media only screen and (max-width: 750px) {
    .search-wrapper-box {
      padding-top: 25%;
      padding-bottom: 15%;
      padding-left: 5%;
    }

    .search-input-wrapper {
      width: 20em !important;
    }
  }
</style>

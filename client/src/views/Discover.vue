<template>
  <div id="discovery">
    <SignTemplate />

    <Navbar />
    <b-row class="content-wrapper">
      <b-col class="side-bar d-none d-lg-block"></b-col>

      <b-col cols="7">
        <b-container>
          <h3 class="font-weight-bold mt-5 mb-2 pb-3 category-title">Κορυφέες Συνταγές</h3>
          <b-row align-h="around">
            <RecipeCard class="mt-4" />
            <RecipeCard class="mt-4" />
            <RecipeCard class="mt-4" />
          </b-row>
        </b-container>
      </b-col>

      <b-col class="side-bar d-lg-flex flex-column justify-content-center d-none">
        <div class="font-weight-bold h4 notification-label">Ειδοποιήσεις</div>
        <div class="align-items-center d-flex flex-column text-center">
          <div class="text-muted signin-info">
            Συνδεθείτε για να μπορείτε να<br />υποστηρίξετε τους φίλους σας.
          </div>
          <b-button size="md" class="custom-button mt-2"
            @click="$bvModal.show('sign-in')">Σύνδεση</b-button>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';
import RecipeCard from '@/components/discovery/RecipeCard.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';

export default {
  name: 'Discover',
  components: {
    Navbar,
    SignTemplate,
    RecipeCard,
  },
};
</script>

<style lang='scss' scoped>
  #discovery {
    background-color: #EEEEEE;

    .content-wrapper {
      height: 52.5em;

      .side-bar {
        background-color: #F7F7F7;
      }

      .signin-info {
        font-size: 1em;
        line-height: 1.3em;
      }

      .notification-label {
        position: absolute;
        top: 5%;
        left: 8%;
      }

      .category-title {
        border-bottom: 2px #F15D90 solid;
        width: 40%;
      }
    }
  }
</style>

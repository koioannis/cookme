<template>
  <div class="text-center">
    <Navbar class="fixed-top"/>

    <div class="error-wrapper">
      <img src="@/assets/svg/error_icon.svg" class="error-img">
      <div class=" error-message">
        Οοπς.. Κάτι πήγε στραβά προσπαθήστε να ανανεώσετε την σελίδα.
        Εάν το πρόβλημα ξανά εμφανιστεί,
        <router-link to="/about/contact" class="contact"><u>επικοινωνήστε</u></router-link>
        μαζί μας.
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';

export default {
  name: 'ErrorPage',
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
  .error-wrapper {
    margin-top: 10em;

    .error-img {
      width: 25em;
    }

    .error-message {
      width: 50%;
      padding-top: 4em;
      margin: auto;
      font-size: 1.3em;
      opacity: 0.9;
    }

    .contact {
      color: #F04C84;
    }

    .contact:hover {
      color: #cf3669;
    }
  }

  @media only screen and (max-width: 800px) {
    .error-message {
      width: 70% !important;
    }
  }

  @media only screen and (max-width: 400px) {
    .error-message {
      width: 90% !important;
    }

    .error-img {
      width: 20em !important;
    }
  }
</style>

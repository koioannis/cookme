<template>
  <b-row style="height: inherit;">
    <b-col sm="6">
      <div style="height: 100%;" class="d-flex flex-column
        justify-content-center align-items-center mt-2">
        <h1 style="font-size: 4em"><b>Ερωτήσεις</b></h1>
        <p class="contact-info text-muted text-center">
          Έαν δεν βλέπετε αυτό που ψάχνετε
          <u><router-link to="/about/contact" style="color: #F04C84">επικοινωνίστε</router-link></u>
          <br />μαζί μας άμεσα!
        </p>
        <b-button size="md" @click="signBtnClicked"
          class="custom-button">Εγγραφή</b-button>
      </div>
    </b-col>
    <b-col sm="6" class="left-header-img d-none d-md-block"></b-col>
  </b-row>
</template>

<script>
import EventBus from '@/main';

export default {
  name: 'HeaderInfo',
  methods: {
    signBtnClicked() {
      EventBus.$emit('signinOption', false);
      this.$bvModal.show('sign-in');
    },
  },
};
</script>

<style lang="scss" scoped>
  .left-header-img {
    background-image: url('../../assets/about_header.svg');
    background-repeat: no-repeat;
    height: 100%;
  }

  .contact-info {
    font-size: 0.9em;

    u:hover {
      color: rgb(202, 48, 99);
      cursor: pointer;
    }
  }
</style>

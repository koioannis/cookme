<template>
  <b-modal id="sign-in" title="Σύνδεση" hide-footer hide-header>
    <div class="modal-wrapper mb-4">
      <h2 class="text-center pt-4 font-weight-bold">
        <span v-bind:class="signin ? 'sign-selected' : 'sign-btn'"
          @click="signin=true">Σύνδεση</span> /
        <span v-bind:class="signin ? 'sign-btn': 'sign-selected'"
          @click="signin=false">Εγγραφή</span>
      </h2>
      <div class="line mt-4 mb-3"></div>
      <div class="d-flex flex-column">
        <b-button class="facebook-btn" size="md">Facebook</b-button>
        <b-button size="md" class="google-btn mt-3">Google</b-button>
      </div>
      <small style="opacity: 0.9">Μάθετε περισσότερα για τους
        <u class="signin-info">Όρους Χρήσης</u></small>
      <div class="line mt-3 mb-3"></div>
      <SignIn v-if="signin" />
      <SignUp v-else/>
    </div>
  </b-modal>
</template>

<script>
import EventBus from '@/main';

import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';

export default {
  name: 'SignTemplate',
  components: {
    SignIn,
    SignUp,
  },
  data() {
    return {
      signin: true,
    };
  },
  created() {
    EventBus.$on('signinOption', (state) => {
      this.signin = state;
    });
  },
};
</script>

<style lang="scss" scoped>
  .signin-info {
    color: #cf2860;
    cursor: pointer;
    opacity: 1;
  }

  .sign-selected {
    color: #f7327b;
  }

  .sign-btn {
    cursor: pointer;
  }

  .sign-btn:hover {
    opacity: 0.9;
  }
  .modal-wrapper {
    width: 70%;
    margin: auto;
  }

  .line {
    border-bottom: 2px solid #ebebeb;
  }

  .facebook-btn {
    background-color: #3B65AF;
    border: none;
    height: 3em;
  }

  .facebook-btn:hover, .facebook-btn:focus {
    outline: none !important;
    box-shadow: none !important;
    background-color: rgb(42, 86, 163) !important;
  }

  .google-btn {
    border: 3px solid black;
    color: #000 !important;
    height: 3em;
    background-color: #ececec;
    border: none;
  }

  .google-btn:hover, .google-btn:focus {
    outline: none !important;
    box-shadow: none !important;
    background-color: #dddddd !important;
  }
</style>

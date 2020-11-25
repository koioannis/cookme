<template>
  <b-modal id="sign-in" title="Σύνδεση" calss="text-center"
   hide-footer hide-header>
    <div class="modal-wrapper mb-4">
      <h2 class="text-center pt-4 font-weight-bold">
        <span v-bind:class="signin ? 'sign-selected' : 'sign-btn'"
        @click="signin=true">Σύνδεση</span> /
        <span v-bind:class="signin ? 'sign-btn': 'sign-selected'"
        @click="signin=false">Εγγραφή</span>
      </h2>
      <div class="line mt-4 mb-3"></div>
      <div class="d-flex flex-column">
        <b-button class="facebook-btn" size="md"
        style="height: 3em" variant="primary">Facebook</b-button>
        <b-button size="md" class="mt-3 border"
        style="height: 3em" variant="light">Google</b-button>
      </div>
      <small style="opacity: 0.9">Μάθετε περισσότερα για την
      <u class="signin-info">Είσοδο</u> σας.</small>
      <div class="line mt-3 mb-3"></div>

      <SignIn v-if="signin" />
      <SignUp v-else/>
    </div>
  </b-modal>
</template>

<script>
import SignIn from './SignIn.vue';
import SignUp from './SignUp.vue';

export default {
  name: 'SignTemplate',
  components: {
    SignIn,
    SignUp,
  },
  props: {
    signin: Boolean,
  },
};
</script>

<style lang="scss" scoped>
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
  }

  .facebook-btn:focus {
    outline: none;
    box-shadow: none;
  }
</style>

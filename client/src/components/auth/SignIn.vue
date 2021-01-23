<template>
  <form action="#" @submit.prevent="login">
    <div class="text-center text-danger mb-3 lead underline" style="font-size:1em">
      <u>{{errorMessage}}</u></div>
    <div class="text-center text-success mb-3 lead underline" style="font-size:1em">
      <u>{{successMessage}}</u></div>
    <div v-if="!forgotPassword">
      <div class="form-group">
        <input type="email" v-model="email" class="uneditable-input form-control"
        placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" v-model="password" class="uneditable-input form-control"
        placeholder="Κωδικός" required>
        <small class="form-text text-muted">Τα στοιχεία σας θα είναι πάντα ασφαλής.</small>
      </div>
      <button type="submit" class="btn my-btn custom-button">Σύνδεση</button>
      <u class="forgot-password-btn" @click="forgotPasswordBtn">
        Έχω ξεχάσει τον κωδικό πρόσβασης μου.</u>
    </div>
    <div v-else>
      <p class="text-center" style="font-size: 0.9em">
        Πληκτρολογίστε το <b>Email</b> σας και περιμένετε να σας στείλουμε το μήνυμα.</p>
      <div class="form-group">
        <input type="email" v-model="email" class="uneditable-input form-control"
        placeholder="Email" required>
        <button type="submit" class="btn my-btn custom-button mt-3">Σύνδεση</button>
        <u class="forgot-password-btn" @click="forgotPasswordBtn">Επιστροφή</u>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'SingIn',
  data() {
    return {
      errorMessage: '',
      successMessage: '',
      email: '',
      password: '',
      forgotPassword: false,
    };
  },
  methods: {
    resetMessages() {
      this.successMessage = '';
      this.errorMessage = '';
    },
    forgotPasswordBtn() {
      this.resetMessages();

      this.email = '';
      this.password = '';
      this.forgotPassword = !this.forgotPassword;
    },
    login() {
      this.resetMessages();

      if (this.forgotPassword === false) {
        this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password,
        })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            this.password = '';
            this.errorMessage = error;
          });
      }
      if (this.forgotPassword === true) {
        this.$store.dispatch('account/forgotPassword', {
          email: this.email,
        })
          .then(() => {
            this.successMessage = 'Παρακάλουμε πολύ κοιτάξτε αν λάβατε το email που σας στείλαμε.';
          })
          .catch(() => {
            this.errorMessage = 'Κάτι πήγε στραβά ξαναπροσπαθήστε. Αν δεν μπορείτε να συνδεθείτε στείλτε μας ένα email.';
          });
      }
    },
  },
};
</script>

<style scoped>
  .uneditable-input:focus {
    border: 0.1px solid #f73e7b;
    box-shadow: 0 0 8px #f73e7b;
    outline: 0 none;
  }

  .my-btn {
    width: 100%;
    height: 3em;
    background-color: #f73e7b;
    color: white;
  }

  .forgot-password-btn {
    font-size: 0.8em;
    cursor: pointer;
  }
</style>

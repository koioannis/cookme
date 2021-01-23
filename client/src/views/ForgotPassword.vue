<template>
  <div id="forgot-password">
    <h2 class="mt-5 mb-4 text-center"><b>*Αλλαγή κωδικού πρόσβασης*</b></h2>
    <div class="text-danger mb-4 lead underline text-center" style="font-size:1em">
      <u>{{errorMessage}}</u></div>
    <form action="#" @submit.prevent="resetPassword">
      <div class="form-group">
        <p>Νέος Κωδικός Πρόσβασης<span style="color: red"> *</span></p>
        <input type="password" class="big-input input-box p-3"
          placeholder="Πληκτρολογίστε..." v-model="password" required>
      </div>
      <div class="form-group">
        <p>Επαλήθευση<span style="color: red"> *</span></p>
        <input type="password" class="big-input input-box p-3"
          placeholder="Πληκτρολογίστε..." v-model="passwordVerify" required>
      </div>
      <button type="submit" class="btn my-btn custom-button mt-3">Αλλαγή</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ForgotPassword',
  data() {
    return {
      password: '',
      passwordVerify: '',
      errorMessage: '',
    };
  },
  methods: {
    resetPassword() {
      if (this.password !== this.passwordVerify) {
        this.password = '';
        this.passwordVerify = '';
        this.errorMessage = 'Ο κωδικός πρόσβασης δεν τεριάζει!';
      } else if (!/^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,}$/.test(this.password)) {
        this.errorMessage = 'Ο κωδικός σας πρέπει να έχει ένα κεφάλαίο γράμμα ένα μικρό και έναν αριθμό.';
        if (this.password.length < 8) this.errorMessage = 'Ο κωδικός σας πρέπει να έχει τουλάχιστον 8 χαρακτήρες';

        this.password = '';
        this.passwordVerify = '';
      } else {
        this.$store.dispatch('account/resetPassword', {
          resetPasswordToken: this.$route.query.resetPasswordToken,
          newPassword: this.password,
          userId: this.$route.query.userId,
        })
          .then(() => {
            this.$router.push({ path: '/' });
          })
          .catch(() => {
            this.errorMessage = 'Κάτι πήγε στραβά ξαναπροσπαθήστε. Αν δεν μπορείτε να συνδεθείτε στείλτε μας ένα email.';
          });
      }
    },
  },
};
</script>

<style lang='scss' scoped>
  #forgot-password {
    display: block;
    width: fit-content;
    margin: auto;

    .big-input {
      width: 100%;
    }

    .input-box {
      border: none;
      box-shadow: 2px 3px 10px #b9b9b9ad !important;
      outline: none;
      color: rgba(0, 0, 0, 0.788);
    }

    .my-btn {
      width: 100%;
      height: 3em;
      background-color: #f73e7b;
      color: white;
    }
  }
</style>

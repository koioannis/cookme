<template>
  <div id="forgot-password">
    <div class="forgot-password-wrapper text-center">
      <img src="@/assets/svg/logo.svg" class="img-logo" @click="redirectHome">
      <div class="text-danger mb-3 mt-3 lead underline text-center" style="font-size:1em">
        <u>{{errorMessage}}</u></div>
      <form action="#" @submit.prevent="resetPassword">
        <div class="form-group">
          <input type="password" class="big-input input-box p-3" id="passwordInput"
            placeholder="Νέος Κωδικός Πρόσβασης." v-model="password" required>
        </div>
        <div class="form-group mt-4">
          <input type="password" class="big-input input-box p-3" id="passwordVerifyInput"
            placeholder="Επαλήθευση" v-model="passwordVerify" required>
        </div>
        <div class="text-left checkbox-password-show mt-4">
          <input type="checkbox" id="showPasswordCheck" @click="showPassword">
          <label for="showPasswordCheck" class="ml-2">Προβολή Κωδικού</label>
        </div>
        <button type="submit" class="btn my-btn custom-button mt-3">Αλλαγή</button>
      </form>
    </div>
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
    redirectHome() {
      this.$router.push({ path: '/' });
    },
    showPassword() {
      const passwordInput = document.getElementById('passwordInput');
      const passwordVerifyInput = document.getElementById('passwordVerifyInput');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordVerifyInput.type = 'text';
      } else {
        passwordInput.type = 'password';
        passwordVerifyInput.type = 'password';
      }
    },
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
    position: absolute;
    background-color: #E6477D;
    height: 100%;
    width: 100%;

    .forgot-password-wrapper {
      background-color: #F7F7F7;
      padding: 3em;
      width: 30%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 1em;
      border: none;
      box-shadow: 2px 3px 20px #5555557e !important;
      outline: none;
    }

    .big-input {
      min-width: 80%;
      width: fit-content;
    }

    .input-box {
      border: none;
      box-shadow: 2px 3px 10px #b9b9b9ad !important;
      outline: none;
      color: rgba(0, 0, 0, 0.788);
    }

    .my-btn {
      width: 80%;
      height: 3em;
      background-color: #f73e7b;
      color: white;
    }

    .img-logo {
      width: 14em;
      margin: auto;
      margin-bottom: 5%;
      cursor: pointer;
    }

    .checkbox-password-show {
      margin-left: 10%;
    }
  }

  @media only screen and (max-width: 1800px) {
    .forgot-password-wrapper {
      width: 40% !important;
    }
  }

  @media only screen and (max-width: 800px) {
    .forgot-password-wrapper {
      width: 95% !important;
    }
  }
</style>

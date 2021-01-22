<template>
  <form action="#" @submit.prevent="register">
    <div class="text-center text-danger mb-3 lead underline" style="font-size:1em">
      <u>{{errorMessage}}</u></div>
    <div class="form-group">
      <input type="username" v-model="username" class="uneditable-input form-control"
      placeholder="Username" required>
    </div>
    <div class="form-group">
      <input type="email" v-model="email" class="uneditable-input form-control"
      placeholder="Email" required>
    </div>
    <div class="form-group">
      <input type="password" v-model="password" class="uneditable-input form-control"
      placeholder="Κωδικός" required>
    </div>
    <div class="form-group">
      <input type="password" v-model="passwordVerify" class="uneditable-input form-control"
      placeholder="Επαλήθευση Κωδικού" required>
      <small class="form-text text-muted">Τα στοιχεία σας θα είναι πάντα ασφαλής.</small>
    </div>
    <button type="submit" class="btn my-btn custom-button">Εγγραφή</button>
    <div class="text-center mt-4 small">Με την εγγραφή ή σύνδεση συμφωνείς στους
        <span class="terms">Όροι χρήσης</span></div>
  </form>
</template>

<script>
export default {
  name: 'SignUp',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordVerify: '',
      errorMessage: '',
    };
  },
  methods: {
    register() {
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
        this.$store.dispatch('auth/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
          .then(() => {
            window.location.reload();
          })
          .catch((error) => {
            this.password = '';
            this.passwordVerify = '';
            this.errorMessage = error;
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

  .terms {
    text-decoration: underline;
    cursor: pointer;
  }
</style>

<template>
  <form>
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
      <u class="forgot-password-btn">Έχω ξεχάσει τον κωδικό πρόσβασης μου.</u>
  </form>
</template>

<script>
export default {
  name: 'SingIn',
  data() {
    return {
      email: '',
      password: '',
    };
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

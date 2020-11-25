<template>
  <form>
      <div class="form-group">
        <input type="email" class="uneditable-input form-control"
        placeholder="Email" required>
      </div>
      <div class="form-group">
        <input type="password" class="uneditable-input form-control"
        placeholder="Κωδικός" required>
        <small class="form-text text-muted">Τα στοιχεία θα είναι πάντα ασφαλής.</small>
      </div>
      <button type="submit" class="btn my-btn">Submit</button>
      <u class="forgot-password-btn">Έχω ξεχάσει τον κωδικό πρόσβασης μου.</u>
  </form>
</template>

<script>
export default {
  name: 'SingIn',
};
</script>

<style scoped>
  .signin-info {
    color: #cf2860;
    cursor: pointer;
    opacity: 1;
  }

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

  .my-btn:hover {
    background-color: #cf2860;
  }

  .forgot-password-btn {
    font-size: 0.8em;
    cursor: pointer;
  }
</style>

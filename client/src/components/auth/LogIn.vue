<template>
  <b-modal id="sign-in" title="Σύνδεση" calss="text-center"
   hide-footer hide-header>
    <div class="modal-wrapper mb-4">
      <h2 class="text-center pt-4"><b><span style="color: #f73e7b">Σύνδεση</span> /
      <span class="signup-btn">Εγγραφή</span></b></h2>
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
      </form>
      <u class="forgot-password-btn">Έχω ξεχάσει τον κωδικό πρόσβασης μου.</u>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: 'LogIn',
};
</script>

<style lang="scss" scoped>
  .modal-wrapper {
    width: 70%;
    margin: auto;
  }

  .signup-btn {
    cursor: pointer;
  }
  .signup-btn:hover {
    opacity: 0.9;
  }

  .signin-info {
    color: #cf2860;
    cursor: pointer;
    opacity: 1;
  }

  .line {
    border-bottom: 2px solid #ebebeb;
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

  .facebook-btn {
    background-color: #3B65AF;
  }

  .facebook-btn:focus {
    outline: none;
    box-shadow: none;
  }
</style>

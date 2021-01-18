<template>
  <div class="ml-lg-5 text-left contact-wrapper">
    <h1><b>Επικοινωνία!</b></h1>
    <form class="mt-sm-5 pt-4">
      <div class="d-lg-flex">
        <div class="form-group">
          <h5>Όνομα<span style="color: red"> *</span></h5>
          <input type="text" class="small-input input-box p-3 mt-2"
            placeholder="Νίκος" required>
        </div>
        <div class="form-group ml-lg-5">
          <h5>Επώνυμο<span style="color: red"> *</span></h5>
          <input type="text" class="small-input input-box p-3 mt-2"
            placeholder="Νικολάου" required>
        </div>
      </div>
      <div class="form-group">
        <h5>Email<span style="color: red"> *</span></h5>
        <input type="email" class="big-input input-box p-3 mt-2"
          placeholder="example@mail.com" required>
      </div>
      <div class="form-group">
        <h5>Θέμα<span style="color: red"> *</span></h5>
        <input type="text" class="big-input input-box p-3 mt-2"
          placeholder="Το θέμα σας" required>
      </div>
      <div>
        <textarea cols="20" rows="8" class="big-input input-box p-3 mt-3"
          placeholder="Γράψτε μας αυτό που θέλετε." required></textarea>
      </div>
      <button type="submit" class="btn mt-4 my-btn custom-button">Στείλτε</button>
      <div class="small mt-4 text-center">Διαβάστε τους <u>
        <router-link to="/about/terms">Όρους Χρήσης</router-link></u>
        για να μάθετε περισσότερα για την επικοινωνία μαζί μας.</div>
    </form>

    <b-row class="big-input mt-4">
      <b-col col lg="5" cols="12">
        <img src="@/assets/svg/phone.svg">
        <span class="ml-2 text-muted">+210 1231231</span>
      </b-col>
      <b-col col lg="7" cols="12" class="mt-2 mt-lg-auto">
        <img src="@/assets/svg/email.svg">
        <span class="ml-2 text-muted">support@cookme.com</span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Contact',
};
</script>

<style lang="scss" scoped>
  .contact-wrapper {
    width: fit-content;
  }

  .small-input {
    width: 14em;
  }

  .big-input {
    width: 31em;
  }

  .input-box {
    border: none;
    box-shadow: 2px 3px 10px #b9b9b9ad !important;
    outline: none;
    color: rgba(0, 0, 0, 0.788);
  }

  .my-btn {
    width: 31em;
    height: 3em;
    color: white;
    box-shadow: 2px 3px 5px #b9b9b9ad !important;
  }

  @media only screen and (max-width: 1000px) {
    .small-input, .big-input, .my-btn {
      width: 100%;
    }
  }
</style>

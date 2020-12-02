<template>
  <div class="ml-lg-5 text-left contact-wrapper">
    <h1><b>Επικοινωνία!</b></h1>
    <form class="mt-sm-5 pt-4">
      <div class="d-lg-flex">
        <div class="form-group">
          <h5>Όνομα<span style="color: red"> *</span></h5>
          <input type="text" class="custome-contact p-3 mt-2"
            placeholder="Νίκος" style="width: 14em;" required>
        </div>
        <div class="form-group ml-lg-5">
          <h5>Επώνυμο<span style="color: red"> *</span></h5>
          <input type="text" class="custome-contact p-3 mt-2"
            placeholder="Νικολάου" style="width: 14em;" required>
        </div>
      </div>
      <div class="form-group">
        <h5>Email<span style="color: red"> *</span></h5>
        <input type="email" class="custome-contact p-3 mt-2"
          placeholder="example@mail.com" style="width: 31em;" required>
      </div>
      <div class="form-group">
        <h5>Θέμα<span style="color: red"> *</span></h5>
        <input type="text" class="custome-contact p-3 mt-2"
          placeholder="Το θέμα σας" style="width: 31em;" required>
      </div>
      <div>
        <textarea cols="20" rows="8" class="custome-contact p-3 mt-3"
          placeholder="Γράψτε μας αυτό που θέλετε." style="width: 31em;" required></textarea>
      </div>
      <button type="submit" class="btn mt-4 my-btn custom-button">Στείλτε</button>
      <div class="small mt-4 text-center">Διαβάστε τους <u>
        <router-link to="/about/terms">Όρους Χρήσης</router-link></u>
        για να μάθετε περισσότερα για την <br />επικοινωνία μαζί μας.</div>
    </form>
    <div class="type-contacts mt-4">
      <img src="@/assets/phone.svg">
      <span class="ml-2 text-muted">+210 1231231</span>
      <img src="@/assets/email.svg" class="ml-5">
      <span class="ml-2 text-muted">support@cookme.com</span>
    </div>
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

  .custome-contact {
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
</style>

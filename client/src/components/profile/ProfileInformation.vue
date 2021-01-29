<template>
  <div class="profile-info d-md-flex d-block align-items-center">
    <img src="@/assets/svg/account_icon.svg" class="account-img">
    <div class="usr-info ml-5">
      <h4>First Last Name</h4>
      <p class="profile-username">alexandros12321</p>
      <p class="description-title"><b>Περιγραφή</b></p>
      <p class="description">Όλοι μου την ζωή ήθελα να γίνω ο καλύτερος μάγειρας
        που πέρασε στο κόσμο αυτό. #love</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInformation',
};
</script>

<style lang="scss" scoped>
  .profile-info {
    margin-left: 25%;
    margin-right: 25%;
    margin-bottom: 3%;
    margin-top: 4%;

    .account-img {
      width: 10em
    }

    .profile-username {
      font-size: 1.1em;
      margin-top: -0.5em;
      opacity: 0.7;
    }

    .description-title {
      font-size: 0.8em;
      margin-top: -0.5em;
    }

    .description {
      margin-top: -0.5em;
      width: 80%;
    }
  }
</style>

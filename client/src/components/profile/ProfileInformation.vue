<template>
  <div class="profile-info d-md-flex d-block align-items-center text-center text-md-left">
    <img src="@/assets/svg/account_icon.svg" class="account-img">
    <div class="usr-info ml-md-5 mt-3 mt-md-0">
      <h4>First Last Name</h4>
      <p class="profile-username">{{profileId}}</p>
      <p class="description-title"><b>Περιγραφή</b></p>
      <p class="description">Όλοι μου την ζωή ήθελα να γίνω ο καλύτερος μάγειρας
        που πέρασε στο κόσμο αυτό. #love</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInformation',
  data() {
    return {
      profileId: this.$router.history.current.params.profileId,
    };
  },
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

  @media only screen and (max-width: 1000px) {
    .account-img {
      width: 7em !important;
      justify-content: center;
    }
    .profile-info {
      margin-left: 15% !important;
      margin-right: 15% !important;
    }
    .description {
      width: 100% !important;
    }
  }
</style>

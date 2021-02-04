<template>
  <div class="profile-info d-md-flex d-block align-items-center text-center text-md-left">
    <img src="@/assets/svg/account_icon.svg" class="account-img">
    <div class="usr-info ml-md-5 mt-3 mt-md-0">
      <h4 v-if="modify === false">{{name}}</h4>
      <div v-else>
        <input type="text" class="small-input input-box mb-3"
          placeholder="Όνομα" v-model="firstModel">
        <input type="text" class="small-input input-box mb-3 ml-3"
          placeholder="Επώνυμο" v-model="lastModel">
      </div>

      <p class="profile-username">{{profileId}}</p>
      <p class="description-title"><b>Περιγραφή</b></p>
      <p class="description" v-if="modify === false">{{description}}</p>
      <textarea placeholder="Γράψτε κάτι.." class="big-input input-box mb-2"
        v-else v-model="descriptionModel"></textarea>

      <b-button class="custom-button" size="sm" @click="modify = true"
        v-if="getUsername === profileId && modify === false">Επεξεργασία</b-button>

      <div class="d-flex justify-content-md-start justify-content-center" v-if="modify === true">
        <b-button size="sm" class="custom-button" @click="changeAccountInfo">Αποθήκευση</b-button>
        <b-button size="sm" class="ml-2" @click="cancelModification">Ακύρωση</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileInformation',
  data() {
    return {
      profileId: this.$router.history.current.params.profileId,
      modify: false,
      name: null,
      description: 'Ο χρήστης αυτός δεν έχει βάλει περιγραφή.',
      firstModel: null,
      lastModel: null,
      descriptionModel: null,
    };
  },
  methods: {
    cancelModification() {
      this.modify = false;
      this.firstModel = null;
      this.lastModel = null;
      this.descriptionModel = null;
    },
    changeAccountInfo() {
      this.$store.dispatch('account/setAccountInfo', {
        firstName: this.firstModel,
        lastName: this.lastModel,
        description: this.descriptionModel,
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          this.$router.push({ path: '/error-page' });
        });
    },
  },
  created() {
    this.$store.dispatch('account/getAccountInfo', {
      username: this.profileId,
    })
      .then((response) => {
        this.name = `${(response.firstName || 'Όνομα')} ${(response.lastName || 'Επίθετο')}`;
        if (response.description != null) this.description = response.description;
      })
      .catch(() => {
        this.$router.push({ path: '/error-page' });
      });
  },
  computed: {
    getUsername() {
      return this.$store.getters['auth/getUsername'];
    },
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
      margin-top: -0.3em;
      opacity: 0.7;
    }

    .description-title {
      font-size: 0.8em;
      margin-top: -0.5em;
    }

    .description {
      margin-top: -0.5em;
    }

    .input-box {
      border: none;
      box-shadow: 2px 3px 10px #b9b9b9ad !important;
      outline: none;
      color: rgba(0, 0, 0, 0.788);
      width: 100%;
    }

    .small-input {
      width: 30%;
      height: 2.5em;
      padding-left: 1em;
    }

    .big-input {
      padding-left: 1em;
      padding-top: 0.5em;
    }
  }

  textarea {
    resize: none;
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

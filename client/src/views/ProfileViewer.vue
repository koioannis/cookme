<template>
  <div>
    <Navbar class="fixed-top"/>

    <div id="profile" v-if="userExists">
      <ProfileInformation />
      <div class="line-break"></div>
      <b-row align-h="around" v-if="postData != 0" class="posts-wrapper mb-5">
        <div v-for="(post, index) in postData" :key="index" class="mt-5">
          <router-link :to="'/post/view-post/' + post.id" class="post-link">
            <RecipeCard :post="post" style="width: 20em"/>
          </router-link>
        </div>
      </b-row>
      <div class="text-center mt-5 text-muted" v-else>
        <h6>Ο χρήστης αυτός δεν έχει καμία δημοσίευση.</h6>
      </div>
    </div>

    <div id="profile" class="text-center" style="opacity: 0.9" v-else>
      <img class="no-account-image" src="@/assets/svg/no_accounts.svg">
      <h4 class="mt-3">Ο χρήστης που ψάχνετε δεν υπάρχει.</h4>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';
import ProfileInformation from '@/components/profile/ProfileInformation.vue';
import RecipeCard from '@/components/profile/RecipeCard.vue';

export default {
  name: 'ProfileViewer',
  components: {
    Navbar,
    ProfileInformation,
    RecipeCard,
  },
  data() {
    return {
      postData: null,
      userExists: null,
    };
  },
  created() {
    this.$store.dispatch('posts/getAllUserPosts', {
      username: this.$router.history.current.params.profileId,
    })
      .then((response) => {
        this.userExists = 1;
        this.postData = response;
      })
      .catch(() => {
        this.userExists = 0;
      });
  },
};
</script>

<style lang="scss" scoped>
  #profile {
    background-color: #EEEEEE;
    margin-top: 5em;
    width: 100%;

    position: absolute;
    min-height: 100%;
    width: 100%;

    .line-break {
      margin-left: 20%;
      margin-right: 20%;
      border-bottom: 3px solid #b1b1b1;
      opacity: 0.7;
    }

    .posts-wrapper {
      margin-left: 20%;
      margin-right: 20%;
    }

    .post-link {
      color: black;
      text-decoration: none;
    }

    .no-account-image {
      margin-top: 8%;
      width: 8em;
    }
  }

  @media only screen and (max-width: 750px) {
    .line-break {
      margin-left: 10% !important;
      margin-right: 10% !important;
    }
  }
</style>

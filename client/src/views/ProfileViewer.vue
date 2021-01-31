<template>
  <div>
    <Navbar class="fixed-top"/>

    <div id="profile">
      <ProfileInformation />
      <div class="line-break"></div>
      <b-row align-h="around" class="posts-wrapper mb-5">
        <div v-for="(post, index) in postData" :key="index" class="mt-5">
          <router-link :to="'/post/view-post/' + post.id" class="post-link">
            <RecipeCard :post="post" style="width: 20em"/>
          </router-link>
        </div>
      </b-row>
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
    };
  },
  created() {
    this.$store.dispatch('posts/getAllUserPosts', {
      username: this.$router.history.current.params.profileId,
    })
      .then((response) => {
        console.log(response);
        this.postData = response;
      })
      .catch(() => {
        console.log('TODO');
      });
  },
};
</script>

<style lang="scss" scoped>
  #profile {
    background-color: #EEEEEE;
    margin-top: 5em;
    position: absolute;
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
  }

  @media only screen and (max-width: 750px) {
    .line-break {
      margin-left: 10% !important;
      margin-right: 10% !important;
    }
  }
</style>

<template>
  <div>
    <Navbar style="padding-top: 0.2em; padding-bottom: 0.2em"/>

    <div id="profile">
      <ProfileInformation />
      <div class="line-break"></div>
      <b-row align-h="around" class="posts-wrapper">
        <div v-for="index in testPosts" :key="index" class="mt-5">
          <RecipeCard  style="width: 20em"/>
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
      testPosts: 10,
    };
  },
};
</script>

<style lang="scss" scoped>
  #profile {
    background-color: #EEEEEE;
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
  }
</style>

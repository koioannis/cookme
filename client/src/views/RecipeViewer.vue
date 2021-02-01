<template>
  <div id="post">
    <SignTemplate />

    <Navbar class="fixed-top"/>
    <b-row class="content-wrapper">
      <b-col class="d-none d-md-block">
        <CommentSection class="side-bar"/>
      </b-col>

      <b-col cols="10" class="ml-sm-5">
        <b-row>
          <b-col lg="8" class="mb-4 mb-md-auto">
            <RecipeBody
              :title="title"
              :description="description"
              :grade="grade"
              :steps="steps"/>
          </b-col>
          <b-col class="pt-4 d-sm-block d-none">
            <IngredientsSection
              :ingredients="ingredients"
              :username="username"
              :postId="id"/>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommentSection from '@/components/posts/CommentSection.vue';
import IngredientsSection from '@/components/posts/IngredientsSection.vue';
import RecipeBody from '@/components/posts/RecipeBody.vue';

import Navbar from '@/components/discovery/Navbar.vue';
import SignTemplate from '@/components/auth/SignTemplate.vue';

export default {
  name: 'RecipeViewer',
  data() {
    return {
      id: null,
      title: null,
      description: null,
      steps: null,
      grade: null,
      ingredients: null,
      username: null,
    };
  },
  mounted() {
    window.scroll(0, 0);
  },
  created() {
    this.$store.dispatch('posts/fetchHolePost', {
      id: this.$router.history.current.params.id,
    })
      .then((response) => {
        this.id = response.id;
        this.title = response.title;
        this.grade = response.grade;
        this.description = response.description;
        this.ingredients = response.ingredients;
        this.steps = response.steps;
        this.username = response.user.username;
      })
      .catch(() => {
        this.$router.push({ path: '/' });
      });
  },
  components: {
    Navbar,
    CommentSection,
    SignTemplate,
    IngredientsSection,
    RecipeBody,
  },
};
</script>

<style lang="scss" scoped>
  body {
    background-color: #EEEEEE;

    #post {
      height: 100%;

      .content-wrapper {
        height: inherit;
        margin-top: 5.9em;

        .side-bar {
          background-color: #F7F7F7;
          height: 100%;
          width: 16%;
        }
      }
    }
  }
</style>

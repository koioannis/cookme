<template>
  <div id="post">
    <SignTemplate />

    <Navbar class="fixed-top"/>
    <b-row class="content-wrapper">
      <b-col class="d-none d-md-block">
        <CommentSection class="side-bar"/>
      </b-col>

      <b-col cols="10">
        <PostSection />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Navbar from '@/components/discovery/Navbar.vue';
import CommentSection from '@/components/posts/CommentSection.vue';
import PostSection from '@/components/posts/PostSection.vue';

import SignTemplate from '@/components/auth/SignTemplate.vue';

export default {
  name: 'RecipeViewer',
  mounted() {
    window.scroll(0, 0);
  },
  components: {
    Navbar,
    CommentSection,
    PostSection,
    SignTemplate,
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

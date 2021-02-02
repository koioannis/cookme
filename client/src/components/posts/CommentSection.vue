<template>
  <div class="position-fixed">

    <h4 class="font-weight-bold text-center mt-5 pb-2 comment-title">Σχόλια</h4>

    <div class="mt-5" id="comments">
      <div v-if="comments" id="other-comments">
        <div v-for="(comment, index) in comments" :key="index" class="mb-5">
          <div class="comment-box d-flex">
            <div class="user-img mr-2"></div>
            <div class="content-wrapper">
              <div class="font-weight-bold ml-2">
                {{comment.user.username}}
              </div>
              <div class="ml-2">
                {{comment.content}}
              </div>
              <div class="ml-2 text-danger text-right mr-3" style="cursor: pointer"
                v-if="comment.user.username === username || admin == 'true'"
                @click="deleteComment(comment.id)">
                <u>Διαγραφη</u>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center text-muted" id="other-comments" v-else>
        <div class="h6">Δεν υπάρχουν σχόλια</div>
      </div>

      <div class="d-flex mb-5" v-if="loggedIn === true">
        <textarea rows="1" class="big-input input-box" placeholder="Γράψτε κάτι.."
          v-model="userComment" maxlength="100"></textarea>
        <b-button size="sm" class="custom-button ml-2"
          style="border-radius: 20%" @click="sendComment"><h3>></h3></b-button>
      </div>

      <div class="sign-in-info mt-3" v-else>
        <div class="text-center">
          <div class="text-muted" style="font-size: 0.8em">
            Συνδεθείτε για να μπορείτε να<br>υποστηρίξετε τους φίλους σας.</div>
          <b-button size="sm" class="custom-button mt-2" @click="$bvModal.show('sign-in')">
            Σύνδεση
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentSection',
  props: [
    'comments',
    'postId',
  ],
  data() {
    return {
      userComment: null,
      username: null,
      admin: null,
    };
  },
  mounted() {
    this.username = this.$store.getters['auth/getUsername'];
    this.admin = this.$store.getters['auth/getAdmin'];
  },
  methods: {
    sendComment() {
      this.$store.dispatch('posts/comments/createComment', {
        postId: this.postId,
        content: this.userComment,
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          this.$route.push({ path: 'error-page' });
        });
    },
    deleteComment(deletedCommentId) {
      this.$store.dispatch('posts/comments/deleteComment', {
        postId: this.postId,
        commentId: deletedCommentId,
      })
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          this.$router.push({ path: '/error-page' });
        });
    },
  },
  computed: {
    loggedIn() {
      return this.$store.getters['auth/loggedIn'];
    },
  },
};
</script>

<style lang="scss" scoped>
  .comment-title {
    border-bottom: 2px solid #EF6D9A;
    width: 50%;
    margin: auto;
  }

  #comments {
    margin-left: 5%;
    margin-right: 5%;
    height: 100%;

    #other-comments {
      height: 60%;
      overflow-y: scroll;

      .content-wrapper {
        width: 70%;
        overflow: hidden;
        background-color: rgba(255, 255, 255, 0.507);
        padding: 2%;
        box-shadow: 2px 3px 8px #b9b9b9ad !important;
        outline: none;
        color: rgba(0, 0, 0, 0.788);
        border-radius: 20px;
      }

      .user-img {
        background-image: url('../../assets/svg/account_icon.svg');
        background-repeat: no-repeat;
        background-size: cover;
        border-radius: 100%;
        width: 2.8em;
        height: 2.8em;
      }
    }

    .input-box {
      border: none;
      box-shadow: 2px 3px 8px #b9b9b9ad !important;
      outline: none;
      color: rgba(0, 0, 0, 0.788);
      width: 100%;
      padding: 5%;
      border-radius: 10px;
    }

    textarea {
      resize: none;
    }
  }

  #other-comments::-webkit-scrollbar {
    display: none;
  }
</style>

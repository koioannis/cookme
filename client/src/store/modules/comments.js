import axios from 'axios';

const comments = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  actions: {
    createComment(context, data) {
      return new Promise((resolve, reject) => {
        axios.post(`/posts/comment/${data.postId}`, {
          content: data.content,
        }, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${context.rootState.auth.accessToken}`,
          },
          withCredentials: true,
        })
          .then(() => {
            resolve();
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
};

export default comments;

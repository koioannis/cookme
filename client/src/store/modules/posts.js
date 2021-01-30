import axios from 'axios';

const posts = {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  getters: {

  },
  actions: {
    createPost(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/posts/post', {
          title: data.title,
          description: data.description,
          ingredients: data.ingredients,
          steps: data.steps,
        }, {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${context.rootState.auth.accessToken}`,
          },
        })
          .then((response) => {
            resolve(response.data.id);
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
};

export default posts;

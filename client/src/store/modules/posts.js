import axios from 'axios';

import comments from './comments';

const posts = {
  namespaced: true,
  state: {},
  mutations: {},
  getters: {},
  modules: {
    comments,
  },
  actions: {
    createPost(context, data) {
      return new Promise((resolve, reject) => {
        axios.post('/posts/post', {
          title: data.title,
          description: data.description,
          ingredients: data.ingredients,
          steps: data.steps,
          ingredientsPrice: data.estimatedCost,
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
    deletePost(context, data) {
      return new Promise((resolve, reject) => {
        axios.delete(`/posts/post/${data.postId}`, {
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
    modifyPost(context, data) {
      return new Promise((resolve, reject) => {
        axios.patch(`/posts/post/${data.postId}`, {
          title: data.title,
          description: data.description,
          steps: data.steps,
          ingredientsPrice: data.ingredientsPrice,
          ingredients: data.ingredients,
        }, {
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${context.rootState.auth.accessToken}`,
          },
          withCredentials: true,
        })
          .then(() => {
            resolve(data.postId);
          })
          .catch(() => {
            reject();
          });
      });
    },
    fetchHolePost(context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/posts/post/${data.id}`, {
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(() => {
            reject();
          });
      });
    },
    getAllUserPosts(context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/posts/get-all-posts/${data.username}`, {
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(() => {
            reject();
          });
      });
    },
    getRandomPosts(context, data) {
      return new Promise((resolve, reject) => {
        axios.get(`/posts/get-random-posts/${data.count}`, {
          headers: {
            Accept: 'application/json',
          },
          withCredentials: true,
        })
          .then((response) => {
            resolve(response.data);
          })
          .catch(() => {
            reject();
          });
      });
    },
  },
};

export default posts;

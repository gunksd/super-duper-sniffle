import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    images: [],
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    fetchImages({ commit }) {
      axios.get('API_ENDPOINT') // 替换为实际的API端点
        .then(response => {
          commit('setImages', response.data);
        });
    },
  },
});

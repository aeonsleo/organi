import Vue from 'vue';
import ApiService from '../common/api.service';

const store = {
  state: {
    categories: [],
    current: {},
  },
  getters: {},
  actions: {
    async loadCategories({ commit }) {
      const response = await ApiService.getCategories();
      commit('setCategories', response.data.data);
    },
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
};

export default store;

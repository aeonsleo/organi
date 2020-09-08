import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import category from './category.module';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    category,
  },
});

export default store;

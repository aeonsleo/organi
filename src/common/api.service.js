import Vue from 'vue';
import axios from 'axios';
import { API_URL } from '../common/config';

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
  },

  getCategories() {
    return axios.get('/categories');
  },
};

export default ApiService;

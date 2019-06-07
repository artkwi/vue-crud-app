import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    getAllUsers: (state) => state.users,
  },
  mutations: {
    FETCH_USERS: (state, users) => state.users = users,
  },

  actions: {
    async fetchUsers( {commit} ) {
      const response = await axios.get('http://localhost:3000/users');
      commit('FETCH_USERS', response.data);
    },
  },
});

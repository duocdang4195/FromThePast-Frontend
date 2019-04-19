import Vue from 'vue';
import Vuex from 'vuex';
// import persistedState from 'vuex-persistedstate';
import getters from './getters';
import state from './state';
import actions from './actions';
import mutations from './mutations.js';
  
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins: [persistedState()],
});

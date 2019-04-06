import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';
import state from './state';
import actions from './actions';
  
Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  actions
});

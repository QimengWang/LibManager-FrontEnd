import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userStatus: null
  },
  mutations: {
    setStatus(state,payload){
      if (payload){
        state.userStatus = payload
      }
    }
  },
  actions: {},
  modules: {}
});

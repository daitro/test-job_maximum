import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import citiesModule from "./cities";

const store = new Vuex.Store({
  modules: {
    cities: citiesModule,
  },
});

export default store;

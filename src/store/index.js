import Vue from 'vue' ;
import Vuex from 'vuex' ;
import state from './state.js' ;
import mutations from './mutations.js' ;

Vue.use(Vuex);
const store = {
    state,
    mutations
};
export default new Vuex.Store(store);
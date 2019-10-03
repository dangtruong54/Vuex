import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import getters from './getters'
import mutations from './mutations'
import actions from './actions'


// Khai bao state cho store
const state = {
  count: 0
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
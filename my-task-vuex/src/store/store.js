import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
// Khai bao state cho store
const state = {
  count: 0
}

// Khai bao mutations cho store

const mutations = {
  increment(state) {
    state.count ++
  },
  decrement(state) {
    state.count --
  },
  changeCount(state) {
    if(state.count % 2 === 0) {
      state.count ++
    }else {
      state.count --
    }
  }
}

// Khai bao action cho store

const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementOdd: ({commit, state}) => commit('changeCount'),
  decrementEven: ({commit, state}) => commit('changeCount')
}

// Khai bao getter cho state

const getters = {
  evenOrOdd: state => state.count % 2 ? 'even' : 'odd'
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
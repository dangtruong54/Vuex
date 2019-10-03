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
  changeCountIncrement(state) {
    if(state.count % 2 === 0) {
      state.count ++
    }
  },
  changeCountDecrement(state) {
    if(state.count % 2 !== 0) {
      state.count --
    }
  },
}

// Khai bao action cho store

const actions = {
  // commit is not a function, it is a function
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementOdd: ({commit, state}) => commit('changeCountIncrement'),
  decrementEven: ({commit, state}) => commit('changeCountDecrement'),
  incrementAsync({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
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
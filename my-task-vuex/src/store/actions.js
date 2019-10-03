// Khai bao mutations cho store
export default {
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

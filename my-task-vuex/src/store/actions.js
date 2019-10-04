// Khai bao mutations cho store

// commit is not a function, it is a function
export const increment = ({commit}) => commit('increment')
export const decrement = ({commit}) => commit('decrement')
export const incrementOdd = ({commit, state}) => commit('changeCountIncrement')
export const decrementEven = ({commit, state}) => commit('changeCountDecrement')
export const incrementAsync = ({commit}) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      commit('increment')
      resolve()
    }, 1000)
  })
}

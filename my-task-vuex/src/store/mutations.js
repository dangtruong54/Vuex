// Khai bao action cho store
export const increment = state => {
    state.count ++
    state.history.push('increment')
  }
export const decrement = state => {
    state.count --
    state.history.push('decrement')
  }
export const changeCountIncrement = state => {
    if(state.count % 2 === 0) {
      state.count ++
    }
  }
export const changeCountDecrement = state => {
    if(state.count % 2 !== 0) {
      state.count --
    }
  }

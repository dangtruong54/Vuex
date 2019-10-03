// Khai bao action cho store
// chu y ko dc viet export const mutations = {..}
export default {
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
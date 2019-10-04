// Khai bao getter cho state

export function evenOrOdd(state) {
  return state.count % 2 ? 'even' : 'odd'
}

export const count = state => state.count
const limit = 7

export const recentHistory = state => {
  const end = state.history.length
  const begin = (end - limit) < 0 ? 0 : (end - limit + 1)
  
  return state.history.slice(begin, end).join(',')
}
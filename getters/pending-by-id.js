export default (state) => id => {
  return state.pending.find(item => item.id === id)
}

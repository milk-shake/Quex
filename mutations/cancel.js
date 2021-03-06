export default (types) => {
  return {
    [types[`QUEUE_PENDING_CANCEL`]] (state, payload) {
      let clone = [].concat(state.pending)
      let item = clone.find(item => item && item.id === payload.id)
      clone.splice(state.pending.indexOf(item), 1)

      state.pending = clone
      state.cancelled[payload.id] = item
    }
  }
}

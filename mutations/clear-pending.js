export default (types) => {
  return {
    [types[`QUEUE_PENDING_CLEAR`]] (state, payload) {
      state.pending = []
    }
  }
}

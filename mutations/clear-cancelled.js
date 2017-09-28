export default (types) => {
  return {
    [types[`QUEUE_CANCELLED_CLEAR`]] (state, payload) {
      state.cancelled = []
    }
  }
}

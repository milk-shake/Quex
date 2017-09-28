export default (types) => {
  return {
    [types[`QUEUE_FAILED_CLEAR`]] (state, payload) {
      state.failed = []
    }
  }
}

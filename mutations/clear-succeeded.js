export default (types) => {
  return {
    [types[`QUEUE_SUCCEEDED_CLEAR`]] (state, payload) {
      state.succeeded = []
    }
  }
}

export default (types) => {
  return {
    [types[`QUEUE_FINISH`]] (state, payload) {
      state.processing = false
    }
  }
}

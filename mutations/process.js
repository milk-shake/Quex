export default (types) => {
  return {
    [types[`QUEUE_PROCESS`]] (state, payload) {
      state.processing = true
    }
  }
}

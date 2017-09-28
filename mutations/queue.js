export default (types) => {
  return {
    [types[`QUEUE_PENDING_ADD`]] (state, payload) {
      state.pending.push(payload)
    }
  }
}

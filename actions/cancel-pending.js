export default (types) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    commit(types[`QUEUE_PENDING_CANCEL`], payload)
    resolve()
  })
}

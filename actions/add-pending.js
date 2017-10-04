export default (types) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    let id
    if (payload) {
      id = Number(state.pending.length + Object.keys(state.failed).length + Object.keys(state.cancelled).length + Object.keys(state.succeeded).length) + 1
      payload.id = id

      commit(types[`QUEUE_PENDING_ADD`], payload)

      if (!state.processing) {
        dispatch('process')
          .then((resolved) => {
            console.log('resolved', resolved)
            resolve(resolved[id])
          })
      }
    }
  })
}

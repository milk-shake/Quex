export default (types) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    commit('QUEUE_PROCESS')
    for (let i = 0; i <= state.pending.length; i++) {
      const item = state.pending[i]
      if (item) {
        if (item.processing) continue

        item.processing = true
        dispatch(item.type, item.payload, { root: true })
          .then(success => {
            item.processing = false
            commit('QUEUE_PENDING_SUCCESS', {
              ...item,
              response: success
            })
            resolve()
          })
          .catch(error => {
            item.processing = false
            commit('QUEUE_PENDING_FAILED', {
              ...item,
              error: error
            })
            reject(error)
          })
      }
    }

    commit('QUEUE_FINISH')
    resolve()
  })
}

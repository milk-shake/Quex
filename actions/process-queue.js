export default (types) => ({ commit, state, dispatch, rootState, rootGetters }, payload) => {
  return new Promise((resolve, reject) => {
    commit('QUEUE_PROCESS')
    let promises = []
    for (let i = 0; i <= state.pending.length; i++) {
      const item = state.pending[i]
      if (item) {
        if (item.processing) continue

        item.processing = true
        promises.push(dispatch(item.type, item.payload, { root: true }))
      }
    }

    Promise.all(promises)
      .then(success => {
        let ret = success.map((response, index) => {
          const item = state.pending[index]
          item.processing = false
          commit('QUEUE_PENDING_SUCCESS', {
            ...item,
            response: response
          })

          return {
            transaction_id: item.id,
            response: response
          }
        })
          .reduce((acc, val) => {
            acc[val.transaction_id] = val
            return acc
          }, {})
        commit('QUEUE_PENDING_CLEAR')
        commit('QUEUE_FINISH')
        resolve(ret)
      })
      .catch(error => {
        commit('QUEUE_PENDING_FAILED', {
          error: error
        })
        commit('QUEUE_PENDING_CLEAR')
        commit('QUEUE_FINISH')
        reject(error)
      })
  })
}

import mutations from './mutations'
import types from './types'
import actions from './actions'
import getters from './getters'

const state = {
  pending: [],
  succeeded: {},
  failed: {},
  cancelled: {},
  processing: false
}

const reducer = {}

export const queue = {
  namespaced: true,
  state,
  mutations: mutations(types),
  actions: actions(types, reducer),
  getters: getters(types)
}

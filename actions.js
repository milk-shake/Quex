import AddPending from './actions/add-pending'
import CancelPending from './actions/cancel-pending'
import Process from './actions/process-queue'

/**
 * Actions
 * generates the actions based on the default types
 *
 * @param {object} types the types generated
 */
export default (types, reducer) => {
  return Object.assign({},
    { add: AddPending(types) },
    { cancel: CancelPending(types) },
    { process: Process(types, reducer) }
  )
}

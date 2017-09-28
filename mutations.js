import Queue from './mutations/queue'
import Cancel from './mutations/cancel'
import Fail from './mutations/fail'
import Succeed from './mutations/succeed'

import ClearPending from './mutations/clear-pending'
import ClearFailed from './mutations/clear-failed'
import ClearSucceeded from './mutations/clear-succeeded'
import Process from './mutations/process'
import Finished from './mutations/finished'

/**
 * Mutations
 * generates mutation functions for all the CRUD types
 *
 * @param {object} types the mutation types
 */
export default (types) => {
  return Object.assign({}, Queue(types), Cancel(types), Fail(types), Succeed(types), ClearPending(types), ClearFailed(types), ClearSucceeded(types), Process(types), Finished(types))
}

import Pending from './getters/pending'
import PendingById from './getters/pending-by-id'
import Cancelled from './getters/cancelled'
import CancelledById from './getters/cancelled-by-id'
import Failed from './getters/failed'
import FailedById from './getters/failed-by-id'
import Succeeded from './getters/succeeded'
import SucceededById from './getters/succeeded-by-id'
import HasError from './getters/has-error'

/**
 * Getters
 * generates basic getters for the state
 */
export default () => {
  return Object.assign({},
    { pending: Pending },
    { pendingById: PendingById },
    { cancelled: Cancelled },
    { cancelledById: CancelledById },
    { failed: Failed },
    { failedById: FailedById },
    { succeeded: Succeeded },
    { succeededById: SucceededById },
    { hasError: HasError }
  )
}

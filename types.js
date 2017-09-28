/**
 * Types
 * generates the types for the queue system
 *
 * QUEUE_PENDING_ADD: add an item to the queue
 * QUEUE_PENDING_CANCEL: cancel an item from the queue
 * QUEUE_PENDING_FAILED: fail an item from the queue into the failed state
 * QUEUE_PENDING_SUCCESS: pass an item from the queue into the success state
 * QUEUE_PENDING_CLEAR: clear the pending queue
 * QUEUE_FAILED_CLEAR: clear the failed queue
 * QUEUE_CANCELLED_CLEAR: clear the cancelled queue
 * QUEUE_SUCCESS_CLEAR: clear the success queue
 */
export default {
  [`QUEUE_PENDING_ADD`]: `QUEUE_PENDING_ADD`,
  [`QUEUE_PENDING_CANCEL`]: `QUEUE_PENDING_CANCEL`,
  [`QUEUE_PENDING_FAILED`]: `QUEUE_PENDING_FAILED`,
  [`QUEUE_PENDING_SUCCESS`]: `QUEUE_PENDING_SUCCESS`,
  [`QUEUE_PENDING_CLEAR`]: `QUEUE_PENDING_CLEAR`,
  [`QUEUE_FAILED_CLEAR`]: `QUEUE_FAILED_CLEAR`,
  [`QUEUE_CANCELLED_CLEAR`]: `QUEUE_CANCELLED_CLEAR`,
  [`QUEUE_SUCCEEDED_CLEAR`]: `QUEUE_SUCCEEDED_CLEAR`,
  [`QUEUE_PROCESS`]: `QUEUE_PROCESS`,
  [`QUEUE_FINISH`]: `QUEUE_FINISH`,
  [`QUEUE_SHIFT`]: `QUEUE_SHIFT`
}

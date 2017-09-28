export default (state) => id => {
  console.log('state', state.failed)
  console.log('id', id)
  console.log(state.failed[2])
  return state.failed[id]
}

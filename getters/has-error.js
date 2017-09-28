export default (state) => id => {
  return (state.cancelled[id] || state.failed[id])
}

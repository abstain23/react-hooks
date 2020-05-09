
export default function reducer(state, action) {
  switch(action.type) {
    case 'add':
      return {count: state.count +1}
    default:
      return state
  }
}
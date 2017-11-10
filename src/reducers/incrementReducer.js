export const initialState = {
  count: 0,
  variable2: 'hola'
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.amount
      }
    default:
      return state
  }
}
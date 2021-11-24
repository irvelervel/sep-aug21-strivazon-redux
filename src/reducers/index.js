import { initialState } from '../store'

// the reducer's job is ALWAYS to return a valid state for the application
// the SHAPE of the state you're supposed to return from every case is the SAME
// as the initialValue you're providing to it

// a PURE FUNCTION never mutates its arguments

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: {
          ...state.cart,
          // SUPER WRONG --> state.cart.content.push(action.payload) // action.payload
          // THIS WORKS: content: state.cart.content.concat(action.payload),
          content: [...state.cart.content, action.payload], // <- just my preference
        },
      }
    default:
      return state
  }
}

export default mainReducer

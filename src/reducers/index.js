import { initialState } from '../store'

// the reducer's job is ALWAYS to return a valid state for the application
// the SHAPE of the state you're supposed to return from it is the SAME
// as the initialValue you're providing to it

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default mainReducer

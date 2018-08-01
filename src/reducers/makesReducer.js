import { FETCH_MAKES_STARTED, FETCH_MAKES_LOADED, FETCH_MAKES_ERROR } from '../constants/ActionTypes'

const initialState = {
  makes: [],
  isLoading: false,
  isFinished: false,
  isError: false
}

export default function makesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MAKES_STARTED:
      return {
        makes: [],
        isLoading: true,
        isFinished: false,
        isError: false
      };
    case FETCH_MAKES_LOADED:
      return {
        makes: [...action.makes],
        isLoading: false,
        isFinished: true,
        isError: false
      };
    case FETCH_MAKES_ERROR:
      return {
        makes: [],
        isLoading: false,
        isFinished: false,
        isError: true
      };
    default:
      return state
  }
}

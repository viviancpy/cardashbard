import { FETCH_CAR_OF_THE_WEEK_STARTED, FETCH_CAR_OF_THE_WEEK_LOADED, FETCH_CAR_OF_THE_WEEK_ERROR } from '../constants/ActionTypes'

const initialState = {
  // carOfTheWeek: null,
  details: null,
  isLoading: false,
  isFinished: false,
  isError: false
}

export default function carOfTheWeekReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CAR_OF_THE_WEEK_STARTED:
      return {
        details: null,
        isLoading: true,
        isFinished: false,
        isError: false
      };
    case FETCH_CAR_OF_THE_WEEK_LOADED:
      return {
        details: action.carOfTheWeek,
        isLoading: false,
        isFinished: true,
        isError: false
      };
    case FETCH_CAR_OF_THE_WEEK_ERROR:
      return {
        details: null,
        isLoading: false,
        isFinished: false,
        isError: true
      };
    default:
      return state
  }
}

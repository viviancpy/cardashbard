import { FETCH_MODELS_STARTED, FETCH_MODELS_LOADED, FETCH_MODELS_ERROR } from '../constants/ActionTypes'

const initialState = {
  models: [],
  isLoading: false,
  isFinished: false,
  isError: false
}

export default function modelsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MODELS_STARTED:
      return {
        models: [],
        isLoading: true,
        isFinished: false,
        isError: false
      };
    case FETCH_MODELS_LOADED:
      return {
        models: [...action.models],
        isLoading: false,
        isFinished: true,
        isError: false
      };
    case FETCH_MODELS_ERROR:
      return {
        models: [],
        isLoading: false,
        isFinished: false,
        isError: true
      };
    default:
      return state
  }
}

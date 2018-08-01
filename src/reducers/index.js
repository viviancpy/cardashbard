import { combineReducers } from 'redux';
import carOfTheWeekReducer from './carOfTheWeekReducer';
import modelsReducer from './modelsReducer';
import makesReducer from './makesReducer';

const rootReducer = combineReducers({
  carOfTheWeek: carOfTheWeekReducer,
  models: modelsReducer,
  makes: makesReducer
})

export default rootReducer

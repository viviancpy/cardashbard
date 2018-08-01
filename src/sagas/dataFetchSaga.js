import { put, call } from 'redux-saga/effects';
import * as Types from '../constants/ActionTypes';
import * as Api from '../services/api';

export const fetchMakes = function* fetchMakes(action) {
  try{
    yield put({type: Types.FETCH_MAKES_STARTED});
    const makes = yield call(Api.getMakes);
    console.log('makes:', makes);
    yield put({type: Types.FETCH_MAKES_LOADED, makes: makes.data});
  } catch (e) {
    yield put({type: Types.FETCH_MAKES_ERROR});
  }
}

export const fetchModels = function* fetchModels(action) {
  try{
    yield put({type: Types.FETCH_MODELS_STARTED});
    const models = yield call(Api.getModels);
    console.log('models:', models);
    yield put({type: Types.FETCH_MODELS_LOADED, models: models.data});
  } catch (e) {
    yield put({type: Types.FETCH_MODELS_ERROR});
  }
}

export const fetchCarOfTheWeek = function* fetchCarOfTheWeek(action) {
  try{
    yield put({type: Types.FETCH_CAR_OF_THE_WEEK_STARTED});
    const carOfTheWeek = yield call(Api.getCarOfTheWeek);
    console.log('carOfTheWeek:', carOfTheWeek);
    yield put({type: Types.FETCH_CAR_OF_THE_WEEK_LOADED, carOfTheWeek: carOfTheWeek.data});
  } catch (e) {
    yield put({type: Types.FETCH_CAR_OF_THE_WEEK_ERROR});
  }
}

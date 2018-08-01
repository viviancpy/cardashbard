import { push } from 'react-router-redux';
import { put, takeEvery } from 'redux-saga/effects';
import * as Types from '../constants/ActionTypes';

const navigate = function* navigate(action) {
  yield put(push(action.path));
}

const submitSearch = function* submitSearch(action) {
  const modelId = action.modelId;
  yield put(push(`/make/model/${modelId}`));
}

export const navigateSaga = function* navigateSaga() {
  yield [
     takeEvery(Types.NAVIGATE, navigate),
     takeEvery(Types.SUBMIT_SEARCH, submitSearch)
  ]
}

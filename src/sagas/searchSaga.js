import { push } from 'react-router-redux';
import { put, takeEvery } from 'redux-saga/effects';
import * as Types from '../constants/ActionTypes';

const submitSearch = function* submitSearch(action) {
  const modelId = action.modelId;
  yield put(push(`/make/model/${modelId}`));
}

export const searchSaga = function* searchSaga() {
  yield [
     takeEvery(Types.SUBMIT_SEARCH, submitSearch)
  ]
}

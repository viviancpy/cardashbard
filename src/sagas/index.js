import { fork, call, all, spawn } from 'redux-saga/effects';
import { router, createBrowserHistory } from 'redux-saga-router';
import { fetchModels, fetchMakes, fetchCarOfTheWeek } from './dataFetchSaga';
import { searchSaga } from './searchSaga';
import { navigateSaga } from './navigateSaga';

const history = createBrowserHistory();

const routes = {
  '/': function* home() {
    yield all([
      call(fetchModels),
      call(fetchMakes),
      call(fetchCarOfTheWeek)
    ]);
    yield spawn(navigateSaga);
  },

  '/search': function* search() {
    yield all([
      call(fetchModels),
      call(fetchMakes),
      call(fetchCarOfTheWeek)
    ]);
    yield spawn(navigateSaga);
  },

  '/make/model/:id': function* display({ id }) {
    yield all([
      call(fetchModels),
      call(fetchMakes),
      call(fetchCarOfTheWeek)
    ]);
    yield spawn(navigateSaga);
  },
};

const rootSaga = function * rootSaga () {
  yield fork(router, history, routes);
}

export default rootSaga;

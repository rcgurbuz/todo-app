import { all, fork } from 'redux-saga/effects';
import todosSaga from './todoSagas';

export function* rootSaga() {
  yield all([fork(todosSaga)]);
}

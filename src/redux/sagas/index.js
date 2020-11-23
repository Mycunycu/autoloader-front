import { all } from 'redux-saga/effects';

import { registrationSagas } from './registration';

export function* rootSaga() {
  yield all([
    ...registrationSagas
  ])
}

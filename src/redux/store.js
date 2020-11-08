import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers/index.js';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  compose(applyMiddleware(sagaMiddleware)),
);

import { createStore, applyMiddleware, compose } from 'redux';
import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { IStore } from './redux-state';
import rootSaga from './saga/root-saga';
import { createTypeReduxInitialState, typePendingReducerSet } from './redux-type-saga';
import appReducer, { createInitAppState } from './reducer/app-reducer';

export const InitialState = Record<IStore>({
  ...createTypeReduxInitialState(),
  appState: createInitAppState(),
})();

export const rootReducer = combineReducers(
  {
    ...typePendingReducerSet,
    appState: appReducer,
  },
  InitialState,
);

const sagaMiddleware = createSagaMiddleware();
declare const window;

export const configureStore = (initialStateMap = InitialState) => {
  const initialState = Record<IStore>({
    ...createTypeReduxInitialState(),
    appState: initialStateMap.appState || createInitAppState(),
  })();
  return createStore(rootReducer, initialState, applyMiddleware(sagaMiddleware));
};

export const store = configureStore();
sagaMiddleware.run(rootSaga);

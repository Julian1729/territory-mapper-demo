import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import mapReducer from '../reducers/map';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(mapReducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};

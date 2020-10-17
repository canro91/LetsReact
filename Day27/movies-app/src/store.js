import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import { createLogger } from 'redux-logger';
import thunk  from 'redux-thunk';

const logger = createLogger();

const initialState = {};
const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));

export default store;
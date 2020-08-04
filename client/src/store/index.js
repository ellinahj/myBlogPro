import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import commonReducer, { initialState as commonState } from '../reducers/base';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 3003 });
const reducer = combineReducers({
  common: commonReducer
});

const initialState = {
  common: commonState
};

const store = createStore(reducer, initialState, composeEnhancers());

export default store;

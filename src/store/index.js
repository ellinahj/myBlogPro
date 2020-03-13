import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter, { initialState as counterInitialState } from '../reducers/base';

const composeEnhancers = composeWithDevTools({ realtime: true, port: 3000 });
const reducer = combineReducers({
  counter
});

const initialState = {
  counter: counterInitialState
};

const store = createStore(reducer, initialState, composeEnhancers());

export default store;

import { combineReducers, createStore } from 'redux';
import carReducer from './reducers/carReducer';
import trafficReducer from './reducers/trafficReducer';

const reducer = combineReducers({
  carReducer,
  trafficReducer,
})

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

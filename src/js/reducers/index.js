import { combineReducers } from 'redux';
import indexValue from './indexValue';
import chart from './chart';

const rootReducer = combineReducers({
  indexValue,
  chart,
});

export default rootReducer;

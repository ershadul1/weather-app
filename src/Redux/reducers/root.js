import { combineReducers } from 'redux';
import weatherDataReducer from './weatherData';

const rootReducer = combineReducers({
  weatherData: weatherDataReducer,
});

export default rootReducer;

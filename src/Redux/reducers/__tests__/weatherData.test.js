import weatherDataReducer from '../weatherData';
import * as actions from '../../actions/actionTypes';
import sampleData from '../../../helpers/testData/sampleData';
import parsedData from '../../../helpers/testData/parsedData';

test('should return the initial state', () => {
  const initialState = {
    loaded: false, error: false,
  };
  expect(weatherDataReducer(undefined, {})).toEqual(initialState);
});

test('should handle FETCH_DATA_SUCCESS', () => {
  const fetchSuccessAction = {
    type: actions.FETCH_DATA_SUCCESS,
    payload: sampleData,
  };
  const output = {
    loaded: true, error: false, data: parsedData,
  };
  expect(weatherDataReducer([], fetchSuccessAction)).toEqual(output);
});

test('should handle FETCH_DATA_ERROR', () => {
  const fetchFailureAction = {
    type: actions.FETCH_DATA_FAILURE,
    payload: 'unknown error occured',
  };
  const output = {
    loaded: true, error: true, errorMessage: 'unknown error occured',
  };
  expect(weatherDataReducer([], fetchFailureAction)).toEqual(output);
});

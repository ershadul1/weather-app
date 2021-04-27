import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as types from '../actionTypes';
import fetchWeatherData from '../actionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

test('Fetches data from API', () => {
  fetchMock.getOnce('', {
    body: { data: 'test' },
    headers: { 'content-type': 'application/json' }
  });

  const expectedActions = [
    { type: types.FETCH_DATA_SUCCESS, payload: { data: 'test' } }
  ];

  const store  = mockStore({ weatherData: {} });

  return store.dispatch(fetchWeatherData()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});
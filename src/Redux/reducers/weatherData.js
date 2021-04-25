import * as actions from '../actions/actionTypes';
import parseData from '../../helpers/parseCardData';

const initialState = {
  loaded: false,
  error: false,
};

const weatherData = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DATA_SUCCESS:
      return {
        ...state, loaded: true, error: false, data: parseData(action.payload),
      };
    case actions.FETCH_DATA_FAILURE:
      return {
        ...state, loaded: true, error: true, errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default weatherData;

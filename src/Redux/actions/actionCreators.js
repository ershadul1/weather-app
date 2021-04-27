import * as actions from './actionTypes';

const fetchWeatherData = () => (dispath) => {
  const {
    REACT_APP_API_KEY,
    REACT_APP_API_URL,
  } = process.env;

  return fetch(`${REACT_APP_API_URL}?q=Munich,de&APPID=${REACT_APP_API_KEY}&cnt=40`)
    .then((response) => response.json())
    .then((data) => {
      dispath({ type: actions.FETCH_DATA_SUCCESS, payload: data });
    })
    .catch((error) => {
      dispath({ type: actions.FETCH_DATA_FAILURE, payload: error });
    });
};

export default fetchWeatherData;

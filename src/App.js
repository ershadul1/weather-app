import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchWeatherData from './Redux/actions/actionCreators';
import Loading from './components/Loading/Loading';
import Error from './components/Error/Error';
import WeatherInfo from './containers/WeatherInfo/WeatherInfo';

const App = ({ loaded, error, fetchWeatherData }) => {
  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (!loaded) {
    return (<Loading />);
  }

  if (error) {
    return (<Error />);
  }

  return (
    <div className="App">
      <WeatherInfo />
    </div>
  );
};

App.propTypes = {
  loaded: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loaded: state.weatherData.loaded,
  error: state.weatherData.error,
});

const mapDispatchToProps = { fetchWeatherData };

export default connect(mapStateToProps, mapDispatchToProps)(App);

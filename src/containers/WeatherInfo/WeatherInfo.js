import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import UnitSwitch from '../../components/UnitSwitch/UnitSwitch';
import Arrows from '../../components/Arrows/Arrows';

const WeatherInfo = ({ data }) => {
  const [unit, setUnit] = useState('F');

  const handleUnitChange = (value) => {
    setUnit(value);
  };

  console.log(data);
  return (
    <Container maxWidth="md">
      <UnitSwitch unit={unit} handleUnitChange={handleUnitChange} />
      <Arrows />
    </Container>
  );
};

WeatherInfo.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  data: state.weatherData.data,
});

export default connect(mapStateToProps, null)(WeatherInfo);

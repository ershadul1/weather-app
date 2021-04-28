import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import UnitSwitch from '../../components/UnitSwitch/UnitSwitch';
import Arrows from '../../components/Arrows/Arrows';
import WeatherCards from '../../components/WeatherCards/WeatherCards';
import BarChart from '../../components/BarChart/BarChart';

const WeatherInfo = ({ data }) => {
  const [unit, setUnit] = useState('F');
  const [currentCard, setCurrentCard] = useState(0);
  const totalCards = 5;
  const { hourlyData } = data;
  const { dailyData } = data;
  const tempList = hourlyData[dailyData[currentCard][0]].temp;

  const handleUnitChange = (value) => {
    setUnit(value);
  };

  const moveToNextCard = () => {
    setCurrentCard((currentCard) => {
      if (currentCard < totalCards - 1) {
        return currentCard + 1;
      }
      return currentCard;
    });
  };

  const moveToPrevCard = () => {
    setCurrentCard((currentCard) => {
      if (currentCard > 0) {
        return currentCard - 1;
      }
      return currentCard;
    });
  };

  return (
    <Container maxWidth="md">
      <UnitSwitch unit={unit} handleUnitChange={handleUnitChange} />
      <Arrows
        next={moveToNextCard}
        prev={moveToPrevCard}
        currentCard={currentCard}
        totalCards={totalCards}
      />
      <WeatherCards
        currentCard={currentCard}
        dailyData={dailyData}
        unit={unit}
      />
      <BarChart
        tempList={tempList}
        unit={unit}
      />
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

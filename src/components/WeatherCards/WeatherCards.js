import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../Card/Card';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1vh auto',
    maxWidth: '750px',
  },
}));

export default function WeatherCards({ currentCard, dailyData, unit }) {
  const classes = useStyles();
  const pageSize = 3;
  const last = currentCard < pageSize ? 2 : currentCard;
  const populateArr = (last) => {
    const arr = [];
    for (let i = last - 2; i <= last; i += 1) {
      arr.push(i);
    }
    return arr;
  };

  const arr = populateArr(last);

  return (
    <div className={classes.root}>
      {arr.map((element) => (
        <Card
          key={element}
          cardIndex={element}
          data={dailyData[element]}
          currentCard={currentCard}
          unit={unit}
        />
      ))}
    </div>
  );
}

WeatherCards.propTypes = {
  currentCard: PropTypes.number.isRequired,
  dailyData: PropTypes.instanceOf(Array).isRequired,
  unit: PropTypes.string.isRequired,
};

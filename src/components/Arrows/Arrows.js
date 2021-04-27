import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LeftArrow from './left.svg';
import RightArrow from './right.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '1vh auto',
    maxWidth: '750px',
  },
  arrow: {
    display: 'block',
    width: '120px',
    height: '60px',
    margin: '1vw',
  },
  disabled: {
    display: 'none',
  },
}));

export default function Arrows({
  next, prev, currentCard, totalCards,
}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Button
          onClick={prev}
          className={`${currentCard === 0 ? classes.disabled : ''}`}
          data-testid="left-arrow"
        >
          <img
            src={LeftArrow}
            alt="left-arrow"
            className={classes.arrow}
          />
        </Button>
      </div>
      <div>
        <Button
          onClick={next}
          className={`${currentCard === totalCards - 1 ? classes.disabled : ''}`}
          data-testid="right-arrow"
        >
          <img
            src={RightArrow}
            alt="right-arrow"
            className={classes.arrow}
          />
        </Button>
      </div>
    </div>
  );
}

Arrows.propTypes = {
  next: PropTypes.func.isRequired,
  prev: PropTypes.func.isRequired,
  currentCard: PropTypes.number.isRequired,
  totalCards: PropTypes.number.isRequired,
};

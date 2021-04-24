import React from 'react';
// import PropTypes from 'prop-types';
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
  disabled: {
    display: 'none',
  },
  arrow: {
    display: 'block',
    width: '120px',
    height: '60px',
    margin: '1vw',
  },
}));

export default function Arrows() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button>
        <img src={LeftArrow} alt="left-arrow" className={classes.arrow} />
      </Button>
      <Button>
        <img src={RightArrow} alt="right-arrow" className={classes.arrow} />
      </Button>
    </div>
  );
}

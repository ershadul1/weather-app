import React from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid/v4';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import convert from '../../helpers/unitConversion';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: '7vh auto',
    height: '20vh',
  },
  barcontainer: {
    width: '12.5%',
  },
  bar: {
    background: '#ffc107',
    margin: '4px',
  },
  text: {
    textAlign: 'center',
  },
}));

export default function BarChart({ tempList, unit }) {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.root}>
      {tempList.map((element) => (
        <div key={uuid()} className={classes.barcontainer}>
          <div className={classes.bar} style={{ height: `${(element - 243) / 4}vh` }} />

          <Typography variant="body2" className={classes.text}>
            {' '}
            {convert(unit)(element)}
            {' '}
            {unit}
          </Typography>
        </div>
      ))}
    </Container>
  );
}

BarChart.propTypes = {
  tempList: PropTypes.instanceOf(Array).isRequired,
  unit: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import convert from '../../helpers/unitConversion';
import formatDate from '../../helpers/formatDate';

const useStyles = makeStyles({
  root: {
    width: '30vw',
    margin: '1vw',
  },
  selected: {
    background: '#90caf9',
  },
});

export default function SimpleCard({
  cardIndex, data, currentCard, unit,
}) {
  const classes = useStyles();

  return (
    <Card className={`${classes.root} ${cardIndex === currentCard ? classes.selected : ''}`}>
      <CardContent>
        <Typography variant="h6" className={classes.text}>
          Temp:
          <br />
          {convert(unit)(data[1])}
          {unit}
          <br />
          Date:
          <br />
          {formatDate(data[0])}
        </Typography>
      </CardContent>
    </Card>
  );
}

SimpleCard.propTypes = {
  cardIndex: PropTypes.number.isRequired,
  data: PropTypes.instanceOf(Array).isRequired,
  currentCard: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

const GlobalCss = withStyles({
  '@global': {
    '.MuiFormGroup-root': {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  },
})(() => null);

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    margin: '3vh 0',
  },
}));

export default function RadioButtonsGroup({ unit, handleUnitChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    handleUnitChange(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <FormControl component="fieldset" className={classes.root}>
        <GlobalCss />
        <RadioGroup
          aria-label="unit"
          name="unit"
          value={unit}
          onChange={handleChange}
        >
          <FormControlLabel
            value="C"
            control={<Radio color="primary" />}
            label={<Typography variant="h6">Celcius</Typography>}
          />
          <FormControlLabel
            value="F"
            control={<Radio color="primary" />}
            label={<Typography variant="h6">Fahrenheit</Typography>}
          />
        </RadioGroup>
      </FormControl>
    </Container>

  );
}

RadioButtonsGroup.propTypes = {
  unit: PropTypes.string.isRequired,
  handleUnitChange: PropTypes.func.isRequired,
};

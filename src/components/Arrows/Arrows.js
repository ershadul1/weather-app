import React from 'react';
// import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
  left: {
    clipPath: 'polygon(0% 50%, 40% 0%, 40% 25%, 100% 25%, 100% 75%, 40% 75%, 40% 100%)',
    background: '#3f50b5',
    width: '100px',
    height: '50px',
    margin: '1vw',
  },
  right: {
    clipPath: 'polygon(0% 25%, 60% 25%, 60% 0%, 100% 50%, 60% 100%, 60% 75%, 0% 75%)',
    background: '#3f50b5',
    width: '100px',
    height: '50px',
    margin: '1vw',
  },
}));

export default function Arrows() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.left} />
      <Button className={classes.right} />
    </div>
  );
}

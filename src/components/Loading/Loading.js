import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '@fontsource/roboto';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  progress: {
    marginLeft: theme.spacing(1),
  },
}));

export default function LoadingScreen() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h3">
        Loading
      </Typography>
      <CircularProgress className={classes.progress} />
    </div>
  );
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
}));

export default function Error() {
  const classes = useStyles();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classes.root}>
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Failed to fetch data from API
      </Alert>
      <Button
        variant="contained"
        color="primary"
        onClick={reloadPage}
      >
        Reload Page
      </Button>
    </div>
  );
}

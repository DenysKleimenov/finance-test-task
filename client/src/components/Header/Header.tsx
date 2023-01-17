import React from 'react';
import { Typography, AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  green: {
    backgroundColor: theme.palette.success.dark,
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.green}>
      <Toolbar>
        <Typography variant="h5">Incode Finances</Typography>
      </Toolbar>
    </AppBar>
  );
};

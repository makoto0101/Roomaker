import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import PixelWindow from './PixelWindow';
import PixelLogWindow from './PixelLogWindow';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
              <PixelWindow load={props.load}/>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>C1 xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={12}>
          <Paper className={classes.paper}>C2 xs=6 sm=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

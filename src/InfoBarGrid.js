import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

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

export default function InfobarGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} sm={12}>
          <img src=""/>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
        <Grid item xs={4} sm={12}>
          <Grid>aaa</Grid>
          <Grid>aaa</Grid>
          <Grid>aaa</Grid>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
        <Grid item xs={4} sm={12}>
          <Grid>bbb</Grid>
          <Grid>bbb</Grid>
          <Grid>bbb</Grid>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));

export default function InfobarGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <h1>Roomaker</h1>
        </Grid>
        <Grid item xs={4} sm={12}>
          <CardMedia
          className='temp'
          image='/static/images/animal-animal-photography-avian-2474014.jpg'
          title="Paella dish"
          />  
          
        </Grid>
        <Grid item xs={4} sm={12}>
          <Grid>
           <p>selected mesh name</p>
          </Grid>
          <Grid>
            <h2>Link URL</h2>
            <Button variant="contained" className={classes.button}>
              Default
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
              Primary
            </Button>
            <Button variant="contained" color="secondary" className={classes.button}>
              Secondary
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={4} sm={12}>
          <Grid>
            <h3>Mesh size w*d*h</h3>
            <p>500*400*600</p>
          </Grid>
          <Grid>
            <h3>colors</h3>
            <p>red</p>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
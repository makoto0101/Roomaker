import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { minWidth } from '@material-ui/system';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
    float:"right",
  },
  input: {
    display: 'none',
  },
  data:{
    
  },
  selectFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: "100%",
    width: "100%",
    minHeight: "150px",
    minWidth: "150px",
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },

    mainGrid: {
      marginTop: theme.spacing(3),
    },
    card: {
      display: 'flex',
    },
    cardDetails: {
      flex: 1,
    },

  },
}));

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];


export default function InfobarGrid() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container spacing={4} className={classes.cardGrid}>
       {featuredPosts.map(post => (
         <Grid item key={post.title} xs={12}>
           <CardActionArea component="a" href="#">
             <Card className={classes.card}>
                <Hidden xsup>
                 <CardMedia
                   className={classes.selectFeaturedPost}
                   image="https://source.unsplash.com/user/erondu"
                   title="Image title"
                 />
                </Hidden>
                <div className={classes.cardDetails}>
                  <CardContent>
                   <Typography component="h2" variant="h5">
                     {post.title}
                   </Typography>
                   <Typography variant="subtitle1" color="textSecondary">
                     {post.date}
                   </Typography>
                   <Typography variant="subtitle1" paragraph>
                     {post.description}
                   </Typography>
                   <Typography variant="subtitle1" color="primary">
                     Continue reading...
                   </Typography>
                  </CardContent>
                </div>
             </Card>
           </CardActionArea>
         </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
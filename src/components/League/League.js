import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

const League = (props) => {
    const classes = useStyles();
    const {idLeague,strLeague,strSport} = props.league;
    const history = useHistory();

    const handleClick = (leagueId) => {
        const url = `/league/${leagueId}`;
        history.push(url);
    }


    return (
        <div>
   
   <Grid container>
      <Grid   item xs={4}>
     <Card className={classes.root}>
     
      <CardActionArea>
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          <h2>{strLeague}</h2>
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <h3>{strSport}</h3>
         
          </Typography>
        </CardContent>
        
      </CardActionArea>
      <CardActions>
      <Link to={`/league/${idLeague}`}>show detail of {idLeague}</Link>
      <Button variant="contained" color="primary" onClick={() => handleClick(idLeague)} >
      Explore
     </Button>
      </CardActions>
      
    </Card>
    </Grid>
    </Grid>
    
    </div>

    );
};

export default League;
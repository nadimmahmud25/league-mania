import React from 'react';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'


const League = (props) => {
    
    const {idLeague,strLeague,strSport} = props.league;
    const history = useHistory();

    const handleClick = (leagueId) => {
        const url = `/league/${leagueId}`;
        history.push(url);
    }
    

    return (
      
        <Grid container sm={12} spacing={6} justifyContent="flex">
        <Grid item lg={4} spacing={6}>
        <Card >
     
     <CardActionArea>
       
       <CardContent>
       
         <Typography gutterBottom variant="h5" component="h2">
        
         <h4>{strLeague}</h4>
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         <p>Sport Type:{strSport}</p>
        
         </Typography>
       </CardContent>
      
    </CardActionArea>
    <CardActions>
    <Button variant="contained" color="primary"  onClick={() => handleClick(idLeague)} >
     Explore <FontAwesomeIcon icon={faArrowRight} />
    </Button>
    </CardActions>
     </Card>
    </Grid>
    </Grid> 
         
       

    );
};

export default League;
import React from 'react';
import './LeagueDetails.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight, faBatteryThreeQuarters, faFlag, faFutbol, faGenderless, faInfo, faLandmark, faLowVision, faMale, faMap, faMars,faStore,faTwitter} from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 700,
    },
  });

const LeagueDetails = () => {
    const {leagueId} = useParams();
    const [leagueDetails, setLeagueDetails] = useState({});
    useEffect(() =>{
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetails(data.leagues[0]));
    }, [])
    
    
    return (
        
      <div >
         { <img src={leagueDetails.strLogo} alt="" />}
        
        <Card >
      <CardActionArea>
       
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
          <h3 className="league-name">{leagueDetails.strLeague}</h3>
            <h3><FontAwesomeIcon icon={faLandmark} />{leagueDetails.intFormedYear}</h3>
            <h3><FontAwesomeIcon icon={faFlag} />Country:{leagueDetails.strCountry}</h3>
            <h3><FontAwesomeIcon icon={faFutbol} />Sport Type:{leagueDetails.strSport}</h3>
            <h3><FontAwesomeIcon icon={faMars} />Gender:{leagueDetails.strGender}</h3>
            { <img src={leagueDetails.strBadge} alt=""/>}
            
          </Typography>
        
         <Typography gutterBottom variant="h5" component="h2">
            <h4>{leagueDetails.strDescriptionEN}</h4>
          </Typography>
        </CardContent>
      </CardActionArea>
     
    </Card>
    <footer>
    <a href={`https://${leagueDetails.strTwitter}`}> <FontAwesomeIcon icon={faTwitterSquare} /></a>
    <a href={`https://${leagueDetails.strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
    <a href={`https://${leagueDetails.strFacebook}`}><FontAwesomeIcon icon={faFacebook} /></a>
    </footer>

        </div>
        
        
    );
};

export default LeagueDetails;
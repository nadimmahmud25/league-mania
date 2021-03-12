import React from 'react';
import './LeagueDetails.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import male from '../../images/male.png';
import female from '../../images/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab, faFacebook, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faFlag, faFutbol,faLandmark,faMars,} from '@fortawesome/free-solid-svg-icons'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
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
    }, [leagueId])
    
    return (
      <div>
      
      { <img src={leagueDetails.strBadge} alt="" />}
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
            <div>
             {leagueDetails.strGender=== "Male" ?
              <img src={male} />
            : <img src={female} />}
            </div>
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
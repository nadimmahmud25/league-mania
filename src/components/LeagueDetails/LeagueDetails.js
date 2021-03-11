import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


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
        <div>
            { <img src={leagueDetails.strLogo} alt=""/>}
           { <img src={leagueDetails.strBadge} alt=""/>}
           
            <h3>{leagueDetails.strLeague}</h3>
            <h3>{leagueDetails.intFormedYear}</h3>
            <h3>Country:{leagueDetails?.strCountry}</h3>
            <h3>Gender:{leagueDetails.strGender}</h3>
            <h4>{leagueDetails.strDescriptionEN}</h4>
            
           
           <footer>
          { leagueDetails.strTwitter}
          { leagueDetails.strYoutube}
          { leagueDetails.strFacebook}
          
            
            </footer>
        </div>
        
    );
};

export default LeagueDetails;
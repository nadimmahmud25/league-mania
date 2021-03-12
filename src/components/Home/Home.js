import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
         fetch('https://www.thesportsdb.com/api/v1/json/1/all_leagues.php')
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(95,110)))
    }, [])
    return (
        <div >
           <Header></Header>
        
            {
               leagues && leagues.map(league => <League league = {league}></League>)
            }
           
        </div>
    );
};

export default Home;
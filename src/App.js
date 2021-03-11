import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import LeagueDetails from "./components/LeagueDetails/LeagueDetails";
import NoMatch from "./components/NoMatch/NoMatch";


function App() {
  return (
    <div className="App">
   <Router>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/league/:leagueId">
          <LeagueDetails/>
        </Route>
        <Route path="/social">
         
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
            <NoMatch/>
          </Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;

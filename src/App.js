import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import GamesPage from './components/GamesPage';
import FriendsList from './components/FriendsList';
import ProfilePage from './components/ProfilePage';
import GameStreams from './components/GameStreams'
import Upcoming from './components/UpcomingTitles';
import {ParallaxProvider} from 'react-scroll-parallax';
import GiveAways from './components/GiveAways';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
<Router>
<ParallaxProvider>
    <div className="App">
    <NavBar/>
    <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/Games/:id" component={GameStreams} />
          <Route path="/GamesPage" component={GamesPage} />
          <Route path="/FriendsList" component={FriendsList}/>
          <Route path="/ProfilePage" component={ProfilePage} />
          <Route path="/Upcoming" component={Upcoming} />
          <Route path="/GiveAways" component={GiveAways}/>
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/sign-in" component={SignIn}/>
          <Route/>
      </Switch>
    </div>
    </ParallaxProvider>
</Router>
  );
}

export default App;

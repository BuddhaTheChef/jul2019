import React from 'react';
// import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage';
import {ParallaxProvider} from 'react-scroll-parallax';

function App() {
  return (
<ParallaxProvider>
    <div className="App">
    <LandingPage/>
      {/* <header className="App-header">
      <h1 style={{display:'inline-block'}}>GAMER RANKS</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{height: '45vh'}}>
      <h1 style={{display:'inline-block'}}>GAMER 1</h1>
      </div>
      <div style={{height: '70vh', backgroundColor: 'grey'}}>
      <h1 style={{display:'inline-block'}}>GAMER 2</h1>
      </div>
      <div style={{height: '45vh', backgroundColor: 'green'}}>
      <h1 style={{display:'inline-block'}}>GAMER 3</h1>
      </div>
      <div style={{height: '45vh'}}>
      <h1 style={{display:'inline-block'}}>GAMER 4</h1>
      </div>
      <div style={{height: '70vh', backgroundColor: 'grey'}}>
      <h1 style={{display:'inline-block'}}>GAMER 5</h1>
      </div> */}
    </div>
    </ParallaxProvider>
  );
}

export default App;

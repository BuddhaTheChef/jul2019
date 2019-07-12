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
    </div>
    </ParallaxProvider>
  );
}

export default App;

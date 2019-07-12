import React, { Component } from 'react'
import Skyline from '../assets/skyline1.png';
import XboxController from '../assets/xboxcontroller.png';
import PS4Controller from '../assets/ps4controller1.png';
import Keyboard from '../assets/mechkeyboard.png'
import {Parallax} from 'react-scroll-parallax';

class LandingPage extends Component {
    render() {
        return (
            <div>
            <div id="main">
                <Parallax id="logo" y={[-100, 70]} tagOuter="figure"><h1 style={{textAlign: 'center', fontSize: '121px'}}>GAME TIME MACHINE</h1></Parallax>
                <div id="mainImg"><img src={Skyline} alt="skyline" style={{width: '100%'}}/></div>
            </div> 
            <Parallax id="xbox-div" y={[120, 300]} x={[-135, 50]} style={{overflow: 'hidden'}}>
            <img src={XboxController} alt="xboxcontroller" style={{height: '260px'}}/>
            </Parallax>
            <div style={{ marginTop: '470px', height: '45vh'}}>
            <Parallax id="xbox-div" y={[125, 280]} x={[200, 0]} style={{overflow: 'hidden'}}>
            <img src={PS4Controller} alt="ps4controller" style={{height: '260px'}}/>
            </Parallax>
      <h1 style={{display:'inline-block', margin: '0 45%', width: 'max-content'}}>GAMER 1</h1>
      </div>
      <div style={{height: '70vh', backgroundColor: 'grey'}}>
            <Parallax id="xbox-div" y={[10, 250]} x={[-290, 10]} style={{overflow: 'hidden'}}>
            <img src={Keyboard} alt="Keyboard" style={{height: '200px'}}/>
            </Parallax>
      <h1 style={{display:'inline-block'}}>GAMER 2</h1>
      </div>
      <div style={{height: '45vh', background: 'linear-gradient(#66FFFD, #FFF)'}}>
      <h1 style={{display:'inline-block'}}>GAMER 3</h1>
      </div>
      <div style={{height: '45vh'}}>
      <h1 style={{display:'inline-block'}}>GAMER 4</h1>
      </div>
      <div style={{height: '70vh', backgroundColor: 'grey'}}>
      <h1 style={{display:'inline-block'}}>GAMER 5</h1>
      </div>
        </div>
            );




    }
}

export default LandingPage;


// $(window).scroll(function(){
//     var scrollval = $(this).scrollTop();

//     $("#logo").css("transform", 'tanslate(0px,' + scrollval/2+'%)');
// });
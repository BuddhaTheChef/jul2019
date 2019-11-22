import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "./Footer";
import nt1 from '../assets/newTech1.jpg';
import nt2 from '../assets/newTech2.jpg';
import nt3 from '../assets/newTech3.jpg';
import nt4 from '../assets/newTech4.jpg';
import nt5 from '../assets/newTech5.jpg';
import nt6 from '../assets/newTech6.jpg';
import nt7 from '../assets/newTech7.jpg';
import nt8 from '../assets/newTech8.jpg';
import nt9 from '../assets/newTech9.jpg';
import nt10 from '../assets/newTech10.jpg';

class GiveAways extends Component {
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/sign-up" />;
    return (
      <div>
        <div
          style={{
            marginTop: "142px",
            display: "flex",
            alignItems: "center",
            flexDirection: 'column',
            background: 'whitesmoke',
            paddingBottom: '70px'
          }}
        >
          <h1 style={{ color: 'black', paddingTop: '60px', fontSize: '5rem' }}>New In Tech</h1>
          <div style={{ background: 'whitesmoke', width: '100%' }}>
            <div class="main-tech-top-div">
              <div class="tech-top-divs"><img src={nt1} alt="tech-pic" className="newTechPics" /></div>
              <div class="tech-top-divs"><img src={nt2} alt="tech-pic" className="newTechPics" /></div>
              <div class="tech-top-divs"><img src={nt3} alt="tech-pic" className="newTechPics" /></div>
            </div>
            <div class="main-tech-mid-div">
            <div class="main-tech-inner-div">
              <h3 style={{ margin: '0px' }}>TOP TECH</h3>
              <p style={{ margin: '0px' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            </div>
            </div>
          </div>
          <div class="main-tech-top-div">
            <div class="tech-top-divs"><img src={nt4} alt="tech-pic" className="newTechPics" /></div>
            <div class="tech-top-divs"><img src={nt5} alt="tech-pic" className="newTechPics" /></div>
            <div class="tech-top-divs"><img src={nt6} alt="tech-pic" className="newTechPics" /></div>
          </div>
          <div class="main-tech-mid-div ">
            Other content
          </div>
          <div class="main-tech-top-div">
            <div class="tech-top-divs"><img src={nt7} alt="tech-pic" className="newTechPics" /></div>
            <div class="tech-top-divs"><img src={nt8} alt="tech-pic" className="newTechPics" /></div>
            <div class="tech-top-divs"><img src={nt9} alt="tech-pic" className="newTechPics" /></div>
          </div>
          <div class="main-tech-mid-div">
            Other content
          </div>
          <div class="main-tech-top-div">
            <div class="tech-top-divs"><img src={nt10} alt="tech-pic" className="newTechPics" /></div>
            <div class="tech-top-divs">Bye</div>
            <div class="tech-top-divs">Cry</div>
          </div>
          <div class="main-tech-top-div">
            <div class="tech-top-divs">Hi</div>
            <div class="tech-top-divs">Bye</div>
            <div class="tech-top-divs">Cry</div>
          </div>
          <div class="main-tech-top-div">
            <div class="tech-top-divs">Hi</div>
            <div class="tech-top-divs">Bye</div>
            <div class="tech-top-divs">Cry</div>
          </div>
        </div>
        <footer className="mainFooterDiv">
          <Footer />
        </footer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(GiveAways);

import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import Footer from "./Footer";

class GiveAways extends Component {
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/sign-up" />;
    return (
      <div>
        <div
          style={{
            marginTop: "142px",
            height: "-webkit-fill-available",
            display: "flex",
            alignItems: "center",
            flexDirection: 'column'
          }}
        >
          <h1 style={{color: 'whitesmoke'}}>Whats new in Tech?</h1>
          <div style={{background: 'whitesmoke', height: '105vh', width: '100%'}}>
          <div class="main-tech-top-div">
            <div class="tech-top-divs">Hi</div>
            <div class="tech-top-divs">Bye</div>
            <div class="tech-top-divs">Cry</div>
          </div>
          <div class="main-tech-mid-div ">
            Other content
          </div>
          </div>
        </div>
        <footer className="mainFooterDiv">
          <Footer/>
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

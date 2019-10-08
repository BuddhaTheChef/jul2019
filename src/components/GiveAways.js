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
          <h1>GiveAways!!</h1>
          <div style={{background: 'whitesmoke', height: '75vh', width: '100%'}}></div>
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

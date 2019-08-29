import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class GiveAways extends Component {
  render() {
    const { auth } = this.props;

    if (!auth.uid) return <Redirect to="/sign-up" />;
    return (
      <div>
        <div
          style={{
            marginTop: "60px",
            height: "-webkit-fill-available",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>GiveAways!!</h1>
        </div>
        <footer className="mainFooterDiv">
          <h1>Setup for foooter</h1>
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

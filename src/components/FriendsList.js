import React, { Component } from "react";
import Footer from "./Footer";

class FriendsList extends Component {
  render() {
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
          <h1>Friends Tech Specs!!</h1>
        </div>
        <footer className="mainFooterDiv">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default FriendsList;

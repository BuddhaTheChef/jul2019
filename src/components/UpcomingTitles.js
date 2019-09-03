import React, { Component } from "react";
import Footer from "./Footer";

class UpcomingTitles extends Component {
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
          <h1>Upcoming Titles</h1>
        </div>
        <footer className="mainFooterDiv">
          <Footer/>
        </footer>
      </div>
    );
  }
}

export default UpcomingTitles;

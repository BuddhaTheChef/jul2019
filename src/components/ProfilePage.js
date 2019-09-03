import React, { Component } from "react";
import { connect } from "react-redux";
import ProjectList from "./ProjectList";
import CreateProject from "./CreateProject";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { signOut } from "../store/actions/authActions";
import ProfilePic from "../assets/profilePic.jpg";
import Footer from "./Footer";

class ProfilePage extends Component {
  render() {
    console.log(this.props);
    const { projects, profile } = this.props;
    return (
      <div
        style={{
          marginTop: "142px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column"
        }}
      >
        <div className="vl1-gp" />
        <div className="vl2-gp" />
        <div className="vl3-gp" />
        <div className="vl4-gp" />
        <div className="vl5-gp" />
        <div
          style={{
            position: "absolute",
            height: "200px",
            width: "200px",
            background: "#09e6bc",
            right: "315px",
            top: "160px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            border: "slategray 5px solid",
            borderRadius: "10px"
          }}
        >
          <section style={sectionStyle} />
        </div>
        <div
          style={{
            background: "#09e6bc",
            width: "82px",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            marginTop: "60px"
          }}
        >
          <h1>{profile.initals}</h1>
        </div>
        <h1 style={{ marginBottom: "50px", color: "whitesmoke" }}>
          {" "}
          {profile.firstName} {profile.lastName}'s Time Machine
        </h1>
        <CreateProject />
        <ProjectList projects={projects} />
        <footer className="mainFooterDiv">
          <Footer/>
        </footer>
      </div>
    );
  }
}

const sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundSize: "cover",
  backgroundPosition: "right",
  backgroundImage: `url(${ProfilePic})`
};

const mapStateToProps = state => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    profile: state.firebase.profile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut())
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([{ collection: "projects" }])
)(ProfilePage);

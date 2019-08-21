import React, { Component } from 'react'
import {connect} from 'react-redux';
import ProjectList from './ProjectList';
import  CreateProject  from './CreateProject';
import {firestoreConnect} from 'react-redux-firebase';
import { compose } from 'redux';
import {signOut} from '../store/actions/authActions';

class ProfilePage extends Component {
    render() {
        console.log(this.props)
        const {projects, profile} = this.props;
        return (
            <div style={{marginTop: '142px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div className="vl1-gp"></div>
            <div className="vl2-gp"></div>
            <div className="vl3-gp"></div>
            <div className="vl4-gp"></div>
            <div className="vl5-gp"></div>
            <div style={{ background: '#09e6bc', width: '82px', borderRadius: '50%', display: 'flex', justifyContent: 'center', marginTop: '60px'}}><h1>{profile.initals}</h1></div>
            <h1 style={{marginBottom: '50px', color: 'whitesmoke'}}> {profile.firstName} {profile.lastName}'s Time Machine</h1>
            <CreateProject />
            <ProjectList projects={projects} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        profile: state.firebase.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      signOut: () => dispatch(signOut())
    }
  }

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(ProfilePage);
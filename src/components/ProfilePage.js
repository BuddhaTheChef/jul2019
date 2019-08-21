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
        const {projects, profile, auth} = this.props;
        return (
            <div style={{marginTop: '200px', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <div style={{ background: '#09e6bc', width: '82px', borderRadius: '50%', display: 'flex', justifyContent: 'center'}}><h1>{profile.initals}</h1></div>
                <h1 style={{marginBottom: '50px', color: 'whitesmoke'}}> {profile.firstName} {profile.lastName}'s Time Machine</h1>
                <CreateProject />
                <ProjectList projects={projects} auth={auth} />
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
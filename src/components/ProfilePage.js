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
        const {projects} = this.props;
        return (
            <div style={{marginTop: '150px', height: '-webkit-fill-available', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
            <a href="/" onClick={this.props.signOut}> Log Out</a>
                <h1 style={{marginBottom: '100px', color: 'whitesmoke'}}>ProfilePage</h1>
                <CreateProject />
                <ProjectList projects={projects} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects
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
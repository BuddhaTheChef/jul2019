import React, { Component } from 'react'
import {connect} from 'react-redux';
import ProjectList from './ProjectList';

class ProfilePage extends Component {
    render() {
        console.log(this.props)
        const {projects} = this.props;
        return (
            <div style={{marginTop: '150px', height: '-webkit-fill-available', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{marginBottom: '100px', color: 'whitesmoke'}}>ProfilePage</h1>
                <ProjectList projects={projects} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}

export default connect(mapStateToProps)(ProfilePage);
import React from 'react'
import {Link, withRouter } from 'react-router-dom';
import moment from 'moment'
import { connect } from 'react-redux'

const ProjectList = ({projects,auth}) => {
    console.log(projects)
    console.log(auth)
    // const alternatingColor = ['#d5d5d5', '#a9a9a9'];
        return (
            <div>
                {projects && projects.map((project, index) => {
                    return (
                        <Link to={{ pathname: '/project/:id', state: {project}}} style={{textDecoration: 'none'}} className='bigLink'>
                        <div key={project.id} className='proj-list'>
                            <h1 style={{color:'#09e6bc', display: 'inline-flex'}}>{project.title} &nbsp; - &nbsp; <span><h1 style={{fontSize: 18, fontStyle: 'oblique'}}>({project.gamerTag})</h1></span></h1>
                            <h2 style={{color:'whitesmoke', font: 'italic',fontWeight: 200, fontStyle: 'oblique'}}>{project.content}</h2>
                            <p style={{color: 'black'}}>Posted by {project.authorFirstName} {project.authorLastName} on <span>{moment(project.createdAt.toDate()).calendar()}</span></p> 
                            <p style={{color: 'black'}}>Created on: {moment(project.dateCreated).calendar()}</p>
                        </div>
                        </Link>
                    )
                })}
            </div>
        )
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        profile: state.firebase.profile,
        auth: state.firebase.auth.uid
    }
}

export default withRouter(connect(mapStateToProps)(ProjectList));
import React from 'react'
import {Link, withRouter } from 'react-router-dom';
import moment from 'moment'

const ProjectList = ({projects}) => {
    console.log(projects)
        return (
            <div>
                {projects && projects.map(project => {
                    return (
                        <Link to={{ pathname: '/project/:id', state: {project}}} style={{textDecoration: 'none'}}>
                        <div key={project.id} style={{backgroundColor: 'slategray', padding: '30px', margin: '35px 0px', borderRadius: '10px'}}>
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

export default withRouter(ProjectList);
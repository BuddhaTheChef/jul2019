import React from 'react'

const ProjectList = ({projects}) => {
        return (
            <div>
                {projects && projects.map(project => {
                    return (
                        <div key={project.id}>
                            <h1 style={{color:'#09e6bc', display: 'inline-flex'}}>{project.title} &nbsp; - &nbsp; <span><h1 style={{fontSize: 18, fontStyle: 'oblique'}}>({project.gamerTag})</h1></span></h1>
                            <h2 style={{color:'whitesmoke', font: 'italic',fontWeight: 200, fontStyle: 'oblique'}}>{project.content}</h2>
                            <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                        </div>
                    )
                })}
            </div>
        )
}

export default ProjectList;
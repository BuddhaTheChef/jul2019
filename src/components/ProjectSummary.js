import React, {Component} from 'react'
import moment from 'moment'
import { connect } from 'react-redux'
 
class ProjectSummary extends Component {
    render() {
        const project = this.props.location.state.project;
        return (
            <div style={{marginTop: '160px'}}>
            {project ?
                 <div key={project.id} style={{backgroundColor: 'slategray', padding: '30px', margin: '35px 0px', borderRadius: '10px'}}>
                            <h1 style={{color:'#09e6bc', display: 'inline-flex'}}>{project.title} &nbsp; - &nbsp; <span><h1 style={{fontSize: 18, fontStyle: 'oblique'}}>({project.gamerTag})</h1></span></h1>
                            <h2 style={{color:'whitesmoke', font: 'italic',fontWeight: 200, fontStyle: 'oblique'}}>{project.content}</h2>
                            <p>Posted by {project.authorFirstName} {project.authorLastName} on <span>{moment(project.createdAt.toDate()).calendar()}</span></p> 
                            <p>Created on: {moment(project.dateCreated).calendar()}</p>
                        </div>
            :
            <h1>Loading...</h1>
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects,
        profile: state.firebase.profile,
        auth: state.firebase.auth.uid
    }
}


export default connect(mapStateToProps)(ProjectSummary);
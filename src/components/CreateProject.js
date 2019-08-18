import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createProject} from '../store/actions/projectActions';

class CreateProject extends Component {
    state = {
        title:'',
        gamerTag: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }

    render() {
        return (
            <div style={{background: '#09e6bc', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '580px'}}>
                <form onSubmit={this.handleSubmit} className='FormFields' style={{height: '460px', width:'40%', background:'slategray', display: 'flex', justifyContent: 'center', flexDirection: 'column', borderRadius: '10px'}}>
                    <h5 style={{textAlign: 'center', fontSize: '20px', color: 'whitesmoke'}}>Create New Project</h5>
                    <div>
                        <label className="FormField__Label" style={{marginLeft: '60px'}}>Title</label>
                        <input id='title' onChange={this.handleChange} className="FormField__Input" style={{marginLeft: '40px', marginBottom: '30px'}}/>
                    </div>
                    <div>
                        <label className="FormField__Label" style={{marginLeft: '60px'}}>GamerTag</label>
                        <input id='gamerTag' onChange={this.handleChange} className="FormField__Input" style={{marginLeft: '40px', marginBottom: '30px'}}/>
                    </div>
                    <div>
                        <label className="FormField__Label" style={{marginLeft: '60px'}}>Content</label>
                        <input id='content' onChange={this.handleChange} className="FormField__Input" style={{marginLeft: '40px', marginBottom: '30px'}}/>
                    </div>
                    <div className="FormField">
                       <button className='FormField__Button mr-20'>Create</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject)

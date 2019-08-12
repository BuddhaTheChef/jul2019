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
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h5>Create New Project</h5>
                    <div>
                        <label>Title</label>
                        <input id='title' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>GamerTag</label>
                        <input id='gamerTag' onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Content</label>
                        <input id='content' onChange={this.handleChange}/>
                    </div>
                    <div>
                       <button>Create</button>
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

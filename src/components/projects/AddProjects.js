import React from 'react';
import { connect } from 'react-redux';
import * as projectsAction from '../../actions/projectsAction';
import { MdClear } from 'react-icons/md';

class AddProject extends React.Component{
     
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            link: '',
            users: [this.props.userId]
        }

        this.handleAdd = this.handleAdd.bind(this);
        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    handleTitle(e){
        this.setState({
           title: e.target.value
        })
    }

    handleDescription(e){
        this.setState({
            description: e.target.value
         })
    }

    handleLink(e){
        this.setState({
            link: e.target.value
         })
    }

    handleAdd(e){
        e.preventDefault();
        // console.log(this.state)
        this.props.createProject(this.state);
        this.props.showModal();
    }

    render(){
        return (
            <div className="modal">
                <button 
                className="close_modal icon_button" 
                onClick={this.props.showModal}><MdClear /></button>
                <form onSubmit={this.handleAdd} className="projects_form">
                    <legend>Add project</legend>
                    <label>Title</label>
                    <input 
                        className="input"                       
                        onChange={this.handleTitle} 
                        type="text" 
                        name="title" 
                        placeholder="title"/>
                    <label>Description</label>
                    <input 
                        className="input"
                        onChange={this.handleDescription} 
                        type="text" 
                        name="description" 
                        placeholder="description"/>
                    <label>Link to docs</label>
                    <input
                        className="input"
                        onChange={this.handleLink} 
                        type="text" 
                        name="link" 
                        placeholder="link to docs"/>
                    <button 
                    className="button add_project_button"
                    disabled={!this.state.title} 
                    type="submit">add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{ 
        createProject: project => dispatch(projectsAction.createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(AddProject)
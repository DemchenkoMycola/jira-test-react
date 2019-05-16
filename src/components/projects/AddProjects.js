import React from 'react';
import { connect } from 'react-redux';
import * as projectsAction from '../../actions/projectsAction';


class AddProject extends React.Component{
     
    constructor(props){
        super(props);

        this.state = {
            title: '',
            description: '',
            link: '',
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
        this.props.createProject(this.state);
        this.props.showModal();
    }

    render(){
        return (
            <div className="modal">
                <button 
                className="button close_modal" 
                onClick={this.props.showModal}>close</button>
                <form onSubmit={this.handleAdd} className="projects_form">
                    <legend>Add project</legend>
                    <label>Title</label>
                    <input 
                        onChange={this.handleTitle} 
                        type="text" 
                        name="title" 
                        placeholder="title"/>
                    <label>Description</label>
                    <input 
                        onChange={this.handleDescription} 
                        type="text" 
                        name="description" 
                        placeholder="description"/>
                    <label>Link to docs</label>
                    <input
                        onChange={this.handleLink} 
                        type="text" 
                        name="link" 
                        placeholder="link to docs"/>
                    <button disabled={!this.state.title} type="submit">add</button>
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
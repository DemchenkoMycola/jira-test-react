import React from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../../actions/issueActions';
import { MdClear } from 'react-icons/md';

class AddIssue extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            project_id: props.project_id,
            assignee: this.props.user.id,
            priority: 'low'
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.changePriority = this.changePriority.bind(this);
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
    handleSubmit(e){
        e.preventDefault();
        
        this.props.addIssue(this.state);
        
        this.setState({
            title: '',
            description: '',
            project_id: this.props.project_id,
        });

        this.props.handleModal()
    }

    render(){
        return(
            <div className="modal">
                <button 
                    className="close_modal icon_button" 
                    onClick={this.props.handleModal}>
                    <MdClear />
                </button>
                <div className="issues_form">
                    <legend>Add issue</legend>
                    <label>Title</label>
                    <input
                    className="input"
                    onChange={this.handleTitle} 
                    type="text"
                    value={this.state.title}
                    placeholder="title" />
                    <label>Description</label>
                    <input
                    className="input"            
                    onChange={this.handleDescription} 
                    type="text" 
                    value={this.state.description}
                    placeholder="description" />
                    <button 
                    className="button add_issue_button"
                    disabled={!this.state.title} 
                    onClick={this.handleSubmit} >add</button>
                </div>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addIssue: issue => dispatch(createIssue(issue))
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);

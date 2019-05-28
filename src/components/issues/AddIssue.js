import React from 'react';
import { connect } from 'react-redux';
import * as issuesAction from '../../actions/issueActions';


class AddIssue extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            project_id: props.project_id,
        }

        this.handleTitle = this.handleTitle.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
        })
    }

    render(){
        return(
            <div
                className="issues_form">
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
                <button disabled={!this.state.title} onClick={this.handleSubmit} >add</button>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addIssue: issue => dispatch(issuesAction.createIssue(issue))
    }
}

export default connect(null, mapDispatchToProps)(AddIssue);

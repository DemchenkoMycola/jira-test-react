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
        console.log(this.props);
        e.preventDefault();
        this.props.addIssue(this.state);
    }

    render(){
        return(
            <div
                className="issues_form">
                <legend>Add issue</legend>
                <label>Title</label>
                <input
                    onChange={this.handleTitle} 
                    type="text" 
                    placeholder="title" />
                <label>Description</label>
                <input
                    onChange={this.handleDescription} 
                    type="text" 
                    placeholder="description" />
                <button onClick={this.handleSubmit} >add</button>
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

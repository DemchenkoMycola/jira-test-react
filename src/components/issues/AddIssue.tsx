import React from 'react';
import { connect } from 'react-redux';
import { createIssue } from '../../actions/issueActions';
import { MdClear } from 'react-icons/md';

interface User{
    id: string
}   

interface State{
    title: string,
    description: string,
    project_id: string,
    assignee: string,
    priority: string
}

interface Props{
    project_id: string,
    user: User,
    addIssue: (state: State) => void,
    handleModal: () => void
}

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

class AddIssue extends React.Component<Props, State>{

    constructor(props: Props){
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
    }

    handleTitle(e: InputEvent){
        this.setState({
            title: e.target.value
        })
    }

    handleDescription(e: InputEvent){
        this.setState({
            description: e.target.value
        })
    }
    handleSubmit(e: ButtonEvent){
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

const mapDispatchToProps = (dispatch: any) => {
    return {
        addIssue: (issue: State) => dispatch(createIssue(issue))
    }
}

const mapStateToProps = (state: any) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddIssue);

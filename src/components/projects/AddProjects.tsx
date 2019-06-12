import React from 'react';
import { connect } from 'react-redux';
import * as projectsAction from '../../actions/projectsAction';
import { MdClear } from 'react-icons/md';

interface Props{
    userId: string,
    createProject: (project: any) => void,
    showModal: () => void
}

interface State{
    title: string,
    description: string,
    link: string,
    users: string[]
}

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

class AddProject extends React.Component<Props, State>{
     
    constructor(props: Props){
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

    handleLink(e:InputEvent){
        this.setState({
            link: e.target.value
         })
    }

    handleAdd(e: ButtonEvent){
        e.preventDefault();
        this.props.createProject(this.state);
        this.props.showModal();
    }

    render(){
        return (
            <div className="modal">
                <button 
                className="close_modal icon_button" 
                onClick={this.props.showModal}><MdClear /></button>
                <form className="projects_form">
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
                    onClick={this.handleAdd}
                    type="submit">add</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{ 
        createProject: (project: any) => dispatch(projectsAction.createProject(project))
    }
}

export default connect(null, mapDispatchToProps)(AddProject)
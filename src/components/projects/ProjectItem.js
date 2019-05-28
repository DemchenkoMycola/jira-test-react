import React from 'react';
import { Link } from 'react-router-dom';
import ProjectDetails from './ProjectDetails'

class ProjectItem extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            showDetails: false
        }

        this.showDetails = this.showDetails.bind(this);
        this.deleteProject = this.deleteProject.bind(this);
    }    

    showDetails(){
        this.setState({
            showDetails: !this.state.showDetails
        })
    }

    deleteProject(){
        let id = this.props.project.id;
        this.props.deleteProject(id)
    }

    render(){

        let {id, title} = this.props.project;

        return(
            <div>
                <div className="project_item"> 
                    <div>{title}</div>
                    <button 
                        onClick={this.showDetails}>
                        {
                            !this.state.showDetails ?
                            'show details' : 'hide details'
                        }
                    </button>
                    <Link to={`/issues/${id}`}>to project</Link>
                    <button 
                        onClick={this.deleteProject}
                        className="del_button"
                        >del</button>
                </div>
                {
                    this.state.showDetails ?
                    <ProjectDetails project={this.props.project} />
                    : null
                }
            </div>
        )
    }
}

export default ProjectItem;
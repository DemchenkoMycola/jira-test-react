import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

class ProjectItem extends React.Component {

    constructor(props){
        super(props);

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
                <div className="project_item row"> 
                    <div className="col">{title}</div>
                    <div className="col">
                        <Link to={`/details/${id}`} >details</Link>
                    </div>
                    <div className="col">
                        <Link to={`/issues/${id}`}>to project</Link>
                    </div>
                    <div className="col">
                        <button 
                        onClick={this.deleteProject}
                        className="del_button icon_button"
                        >
                        <FaRegTrashAlt />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectItem;
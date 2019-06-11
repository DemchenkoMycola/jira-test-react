import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegTrashAlt } from 'react-icons/fa';

interface Project {
    id: string,
    title: string
}

interface Props{
    project: Project,
    deleteProject: (id: string) => void
}

class ProjectItem extends React.Component<Props> {

    constructor(props: any){
        super(props);

        this.deleteProject = this.deleteProject.bind(this);
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
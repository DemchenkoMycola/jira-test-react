import React from 'react';
import { Link } from 'react-router-dom'

const ProjectItem = (props) => {

        let {id, title} = props.project;

        return(
            <div className="project_item">
                <div>{id}</div>
                <div>{title}</div>
                <button>details</button>
                <Link to={`/issues/${id}`}>to project</Link>
                {/* <button onClick={props.deleteProject}>del</button> */}
            </div>
        )
}

export default ProjectItem;
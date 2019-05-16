import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

const ProjectsList = (props) => {

        let projects = props.projects;

        return (
            <div>
               {
                projects.map(project => 
                        <ProjectItem 
                            key={`${project.id}${project.name}`}
                            project={project}
                        />
                    )
               }
            </div>
        )
} 

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps)(ProjectsList);
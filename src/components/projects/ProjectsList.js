import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { deleteProject } from '../../actions/projectsAction';

const ProjectsList = (props) => {

        let projects = props.projects;   
        let userId = props.userId

        // // Filter projects by user

        projects = projects.filter(project => 
        project.users.findIndex(id => id === userId) >= 0)

        const delProject = (id) => {
            props.deleteProject(id)
        }

        return (
            <div>
               {
                projects.length > 0 ?
                projects.map((project, index) => 
                        <ProjectItem 
                            key={`${project.id}${project.name}`}
                            project={project}
                            index={index}
                            deleteProject={delProject}
                        />
                    )
                : 
                <p>No projects</p>
               
               }
            </div>
        )
} 

const mapDispatchToProps = (dispatch) => {
    return {
        deleteProject: (id) => dispatch(deleteProject(id))
    }
}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
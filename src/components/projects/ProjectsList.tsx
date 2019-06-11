import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import { deleteProject } from '../../actions/projectsAction';

const ProjectsList = (props: any) => {

        let projects = props.projects;   
        let userId = props.userId

        // // Filter projects by user

        projects = projects.filter((project: any)=> 
        project.users.findIndex((id: string) => id === userId) >= 0)

        const delProject = (id: string) => {
            props.deleteProject(id)
        }

        return (
            <div>
               {
                projects.length > 0 ?
                projects.map((project: any) => 
                        <ProjectItem 
                            key={`${project.id}${project.name}`}
                            project={project}
                            deleteProject={delProject}
                        />
                    )
                : 
                <p>No projects</p>
               
               }
            </div>
        )
} 

const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteProject: (id: string) => dispatch(deleteProject(id))
    }
}

const mapStateToProps = (state: any) => {
    return {
        projects: state.projects
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
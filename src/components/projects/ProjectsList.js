import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';
import * as projectAction from '../../actions/projectsAction';

const ProjectsList = (props) => {

        let projects = props.projects;

        const deleteProject = (e, index) =>{
            e.preventDefault();
            console.log(e)
            props.deleteProject(index);
        }

        // console.log(props);

        return (
            <div>
               {
                projects.map((project, index) => 
                        <ProjectItem 
                            key={`${project.id}${project.name}`}
                            project={project}
                            index={index}
                            deleteProject={(e) => deleteProject(e, index)}
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

const mapDispatchToProps = (dispatch) => {
    return {
        daleteProject: index => dispatch(projectAction.deleteProject(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsList);
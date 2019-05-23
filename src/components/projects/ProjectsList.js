import React from 'react';
import { connect } from 'react-redux';
import ProjectItem from './ProjectItem';

const ProjectsList = (props) => {

        let projects = props.projects;
        let userId = props.userId

        


        return (
            <div>
               {
                projects.filter(project => project.users.findIndex(id => id === userId) >= 0)
                .map((project, index) => 
                        <ProjectItem 
                            key={`${project.id}${project.name}`}
                            project={project}
                            index={index}
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
import React from 'react'
import ProjectsList from '../components/projects/ProjectsList';

export default class Projects extends React.Component{
    render(){
        return(
            <div>
                <h1>Projects list</h1>
                <ProjectsList />
            </div>
        )
    }
}
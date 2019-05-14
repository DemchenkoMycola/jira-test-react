import React from 'react'
import ProjectsList from '../components/projects/ProjectsList';

export default class Projects extends React.Component{

    render(){
        return(
            <div>
                <div className="modal">
                    <section className="modal projects_form">
                        <legend>Add project</legend>
                        <label>Title</label>
                        <input type="text" placeholder="title"/>
                        <label>Description</label>
                        <input type="text" placeholder="description"/>
                        <label>Link to docs</label>
                        <input type="text" placeholder="link to docs"/>
                        <button>add</button>
                    </section>
                </div>
                <ProjectsList />
            </div>
        )
    }
}
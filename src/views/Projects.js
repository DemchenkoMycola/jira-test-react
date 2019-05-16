import React from 'react'
import ProjectsList from '../components/projects/ProjectsList';
import AddProjects from '../components/projects/AddProjects';

export default class Projects extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            showModal: false
        }

        this.showModal = this.showModal.bind(this);

    }

    showModal(){
        this.setState({
            showModal: !this.state.showModal
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.showModal ?
                        <AddProjects showModal={this.showModal} />
                    : <button 
                        onClick={this.showModal}
                        className="button"
                        >add project</button>
                }
                
                <ProjectsList />
            </div>
        )
    }
}
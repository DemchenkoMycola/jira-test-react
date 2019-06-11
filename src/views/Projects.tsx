import React from 'react'
import ProjectsList from '../components/projects/ProjectsList';
import AddProjects from '../components/projects/AddProjects';
import Header from '../components/Header';

interface Props {}

interface State{
    showModal: boolean,
    user_id: string
}

export default class Projects extends React.Component<Props, State>{

    constructor(props: any){
        super(props);
        this.state = {
            showModal: false,
            user_id: props.match.params.userId
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
                <Header />
                <main>
                {
                    this.state.showModal ?
                        <AddProjects userId={this.state.user_id} showModal={this.showModal} />
                    : <button 
                        onClick={this.showModal}
                        className="button new_project"
                        >new project</button>
                }
                
                <ProjectsList userId={this.state.user_id} />
                </main>
            </div>
        )
    }
}
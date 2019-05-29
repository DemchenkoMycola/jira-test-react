import React, { useState }  from 'react';
import IssuesList from '../components/issues/IssuesList';
import AddIssue from '../components/issues/AddIssue';

 const Issues = (props) => {

        const project_id = props.match.params.id;

        const [state, setState] = useState({showModal: false})

        const handleModal = () => {
            setState({
                showModal: !state.showModal
            })
        }

        return(
            <div>
                <h1>Project id: {project_id}</h1>
                {
                    state.showModal ?
                    <AddIssue 
                    project_id={project_id}
                    handleModal={handleModal} />
                    :
                    <button 
                        className="button"
                        onClick={handleModal}>
                        add issue
                    </button>
                }
                
                <IssuesList project_id={project_id} />
            </div>
        )
}

export default Issues;
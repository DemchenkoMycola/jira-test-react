import React, { useState }  from 'react';
import IssuesList from '../components/issues/IssuesList';
import AddIssue from '../components/issues/AddIssue';
import Header from '../components/Header';

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
                <Header />
                <main>
                {
                    state.showModal ?
                    <AddIssue 
                    project_id={project_id}
                    handleModal={handleModal} />
                    :
                    <button 
                        className="button"
                        onClick={handleModal}>
                        new issue
                    </button>
                }
                
                <IssuesList project_id={project_id} />
                </main>
            </div>
        )
}

export default Issues;
import React from 'react';
import IssuesList from '../components/issues/IssuesList';
import AddIssue from '../components/issues/AddIssue';

 const Issues = (props) => {
        const project_id = props.match.params.id;
        return(
            <div>
                <h1>Project id: {project_id}</h1>
                <AddIssue project_id={project_id} />
                <h2>Projects issues</h2>
                <IssuesList project_id={project_id} />
            </div>
        )
}

export default Issues;
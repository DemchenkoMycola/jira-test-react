import React from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';
import { updateStatus, assigneeUser } from '../../actions/issueActions';

const IssuesList = (props) => {

    let {issues, projects, usersList, project_id } = props;

    const project = projects.find(project => project_id === project.id)
    const { users } = project;

    issues = issues.filter(issue => project_id === issue.project_id)

    const handleStatus = (id, status) => {
        props.updateStatus(id, status);
    }

    const assigneeUser = (issueId, userId) => {
        props.assigneeUser(issueId, userId);
    }

    return (
        <div>
            {
            issues.length > 0 ?
                issues.map(issue => 
                        <IssueItem 
                        key={`${issue.id}${issue.title}`} 
                        issue={issue}
                        handleStatus={handleStatus}
                        users={users}
                        usersList={usersList}
                        assigneeUser={assigneeUser}
                        />   
                )
            :
            <p>No issues</p>
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        updateStatus: (id, status) => dispatch(updateStatus(id, status)),
        assigneeUser: (issueId, userId) => dispatch(assigneeUser(issueId, userId))
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues,
        projects: state.projects,
        usersList: state.users
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
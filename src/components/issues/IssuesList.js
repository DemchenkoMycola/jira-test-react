import React from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';
import { updateStatus, assigneeUser, changePriority } from '../../actions/issueActions';

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

    const changePriority = (issueId, priority) => {
        props.changePriority(issueId, priority);
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                     <button className="button new_issue" onClick={props.handleModal}>
                     new issue
                     </button>
                </div>
            </div>
            <div className="row">
                <div className="col">title</div>
                <div className="col">desctiption</div>
                <div className="col">status</div>
                <div className="col">Assignee</div>
            </div>
            {
            issues.length > 0 ?
                issues.map(issue => 
                        <IssueItem 
                        key={`${issue.id}${issue.title}`} 
                        issue={issue}
                        users={users}
                        usersList={usersList}
                        assigneeUser={assigneeUser}
                        handleStatus={handleStatus}
                        changePriority={changePriority}
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
        assigneeUser: (issueId, userId) => dispatch(assigneeUser(issueId, userId)),
        changePriority: (issueId, priority) => dispatch(changePriority(issueId, priority))
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
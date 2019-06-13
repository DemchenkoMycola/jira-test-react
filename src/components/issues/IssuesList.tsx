import React from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';
import { updateStatus, assigneeUser, changePriority } from '../../actions/issueActions';

interface Project{
    id: string,
    users: string[]
}

interface Issue {
    id: string,
    title: string,  
    project_id: string,
    description: string,
    status: string, 
    assignee: string, 
    priority: string
}

interface Props{
    issues: Issue[],
    projects: Project[] | any,
    usersList: object[],
    project_id: string,
    updateStatus: (id: string, status: string) => void,
    assigneeUser: (issueId: string, userId: string) => void,
    changePriority: (issueId: string, priority: string) => void,
    handleModal: () => void
}

const IssuesList = (props: Props) => {

    let {issues, projects, usersList, project_id } = props;

    const project = projects.find((project: Project) => project_id === project.id)
    const users = project.users;

    issues = issues.filter(issue => project_id === issue.project_id)

    const handleStatus = (id: string, status: string) => {
        props.updateStatus(id, status);
    }

    const assigneeUser = (issueId: string, userId: string) => {
        props.assigneeUser(issueId, userId);
    }

    const changePriority = (issueId: string, priority: string) => {
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
                issues.map((issue: Issue) => 
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

const mapDispatchToProps = (dispatch: any) => {
    return{
        updateStatus: (id: string, status: string) => dispatch(updateStatus(id, status)),
        assigneeUser: (issueId: string, userId: string) => dispatch(assigneeUser(issueId, userId)),
        changePriority: (issueId: string, priority: string) => dispatch(changePriority(issueId, priority))
    }
}

const mapStateToProps = (state: any) => {
    return {
        issues: state.issues,
        projects: state.projects,
        usersList: state.users
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
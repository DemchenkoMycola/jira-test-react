import React, {useState} from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';
import { updateStatus, assigneeUser } from '../../actions/issueActions';

const IssuesList = (props) => {

    let {issues, projects, usersList, project_id } = props;

    const project = projects.find(project => project_id === project.id)
    const { users } = project;

    const [state, setState] = useState({
        issues: issues.filter(issue => project_id === issue.project_id),
        status: 'todo'
    })

    const handleStatus = (id, status) => {
        props.updateStatus(id, status);
    }

    const assigneeUser = (issueId, userId) => {
        props.assigneeUser(issueId, userId);
    }

    const sortByStatus = (e) => {
        let status = e.target.value
        setState({
            issues: issues.filter(issue => {
                // console.log(issue.status, status)
                return project_id === issue.project_id && issue.status === status}),
            status: status
        })
    }

    return (
        <div>
            <div className="row">
                <div className="col">
                    <button className="button new_issue" onClick={props.handleModal}>
                    new issue
                    </button>
                </div>
                <div className="col">
                <select value={state.status} onChange={sortByStatus}>
                    <option value="todo">to do</option>
                    <option value="in progress">in progress</option>
                    <option value="completed">completed</option>
                </select>
                </div>
            </div>
            <div className="row">
                <div className="col">title</div>
                <div className="col">desctiption</div>
                <div className="col">status</div>
                <div className="col">Assignee</div>
            </div>
            {
            state.issues.length > 0 ?
                state.issues.map(issue => 
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
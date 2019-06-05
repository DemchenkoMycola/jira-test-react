import React from 'react';

const IssueItem = (props) => {
 
    const { users, usersList, issue } = props
    const {id, title, description, status, assignee} = issue;

    console.log(assignee)

    const assigneeUsers = usersList.filter(user => 
        users.find(i => i === user.id)
    )

    const assigneeUser = assigneeUsers.find(user => user.id === assignee)

    const handleChange = (e) => {
        let issueId = id;
        let status = e.target.value
        props.handleStatus(issueId, status)
    }

    const handleAssignee = (e) => {
        let userId = e.target.value
        props.assigneeUser(id, userId);
    }

    return (
        <div className="issue_item row">
            <div className="col">{title}</div>
            <div className="col">{description}</div>
            <div className="col">
                <select value={status} onChange={handleChange}>
                    <option value="todo">to do</option>
                    <option value="in progress">in progress</option>
                    <option value="completed">completed</option>
                </select>
            </div>
            <div className="col">
                <select value={assigneeUser.id} onChange={handleAssignee} >
                {
                    assigneeUsers.map(user => 
                        <option 
                        key={`${user.name}${user.email}`} 
                        value={user.id}
                        >{user.name}</option> 
                    )
                }
                </select>
            </div>
        </div>
    )
}

export default IssueItem;
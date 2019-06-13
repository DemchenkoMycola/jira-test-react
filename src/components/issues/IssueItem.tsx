import React from 'react';

interface Issue{
    id: string,
    title: string,
    description: string,
    status: string,
    assignee: string,
    priority: string
}

interface User {
    id: string,
    name: string,
    email: string
}

interface Props {
    users: string[],
    usersList: User[] | any,
    issue: Issue,
    handleStatus: (issueId: string, status: string) => void,
    assigneeUser: (id: string, userId: string) => void,
    changePriority: (id: string, priority: string) => void
}

type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

const IssueItem = (props: Props) => {
 
    const { users, usersList, issue } = props
    const {id, title, description, status, assignee, priority} = issue;

    const assigneeUsers = usersList.filter((user: User)=> 
        users.find((i: string) => i === user.id)
    )

    let assigneeUser = assigneeUsers.find((user: User) => user.id === assignee)

    const handleChange = (e: SelectEvent) => {
        let issueId = id;
        let status = e.target.value
        props.handleStatus(issueId, status)
    }

    const handleAssignee = (e: SelectEvent) => {
        let userId = e.target.value
        props.assigneeUser(id, userId);
    }

    const handlePriority = (e: SelectEvent) => {
        let priority = e.target.value;
        props.changePriority(id, priority);
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
                    assigneeUsers.map((user: User) => 
                        <option 
                        key={`${user.name}${user.email}`} 
                        value={user.id}
                        >{user.name}</option> 
                    )
                }
                </select>
            </div>
            <div className="col">
                <select 
                    className={`priority_select priority_${priority}`} 
                    value={priority} 
                    onChange={handlePriority}
                    >
                    <option value="high">high</option>
                    <option value="medium">medium</option>
                    <option value="low">low</option>
                </select>
            </div>
        </div>
    )
}

export default IssueItem;
import React from 'react';

const IssueItem = (props) => {
    const {id, title, description, status} = props.issue;
 
    const handleChange = (e) => {
        let issueId = id;
        let status = e.target.value
        props.handleStatus(issueId, status)
    }

    return (
        <div className="issue_item">
            <div>{title}</div>
            <div>{description}</div>
            <select value={status} onChange={handleChange}>
                <option value="todo">to do</option>
                <option value="in progress">in progress</option>
                <option value="completed">completed</option>
            </select>
            <div>
                {/* <span>
                {date_created}
                </span>
                <span>
                {date_updated}
                </span> */}
            </div>
        </div>
    )
}

export default IssueItem;
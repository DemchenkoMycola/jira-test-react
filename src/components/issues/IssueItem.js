import React from 'react';

const IssueItem = (props) => {
    let {title, description} = props.issue;
    // console.log(props)
    return (
        <div className="issue_item">
            <div>{title}</div>
            <div>{description}</div>
            <select>
                <option>to do</option>
                <option>in progress</option>
                <option>completed</option>
            </select>
        </div>
    )
}

export default IssueItem;
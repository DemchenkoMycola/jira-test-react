import React from 'react';

const IssueItem = (props) => {
    let {title, description} = props.issue;
    console.log(props)
    return (
        <div className="issue_item">
            <div>{title}</div>
            <div>{description}</div>
        </div>
    )
}

export default IssueItem;
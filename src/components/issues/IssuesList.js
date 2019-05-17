import React from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';

const IssuesList = (props) => {

    let issues = props.issues;

    return (
        <div>
            {
                issues.filter(issue => props.project_id === issue.project_id)
                .map(issue => 
                        <IssueItem 
                        key={`${issue.id}${issue.title}`} 
                        issue={issue} 
                        />   
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}


export default connect(mapStateToProps)(IssuesList);
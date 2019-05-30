import React from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';
import { updateStatus } from '../../actions/issueActions';

const IssuesList = (props) => {

    let issues = props.issues;

    issues = issues.filter(issue => props.project_id === issue.project_id)

    const handleStatus = (id, status) => {
        props.updateStatus(id, status);
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
        updateStatus: (id, status) => dispatch(updateStatus(id, status))
    }
}

const mapStateToProps = (state) => {
    return {
        issues: state.issues
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IssuesList);
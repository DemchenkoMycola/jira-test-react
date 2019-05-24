import React from 'react';
import { connect } from 'react-redux';
import IssueItem from './IssueItem';
import { updateStatus } from '../../actions/issueActions';

const IssuesList = (props) => {

    let issues = props.issues;

    const handleStatus = (id, status) => {
        // console.log(id, status)
        props.updateStatus(id, status);
    }

    return (
        <div>
            {
                issues.filter(issue => props.project_id === issue.project_id)
                .map(issue => 
                        <IssueItem 
                        key={`${issue.id}${issue.title}`} 
                        issue={issue}
                        handleStatus={handleStatus}
                        />   
                )
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
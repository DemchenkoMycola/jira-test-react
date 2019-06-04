import * as actionTypes from './actionTypes';

export const createIssue = (issue) => {
    return{
        type: actionTypes.ADD_ISSUE,
        issue
    }
};

export const updateStatus = (issue_id, status) => {
    return{
        type: actionTypes.UPDATE_STATUS,
        issue_id,
        status
    }
};

export const assigneeUser = (issueId, userId) => {
    return{ 
        type: actionTypes.ASSIGNEE_USER,
        issueId,
        userId 
    }
};
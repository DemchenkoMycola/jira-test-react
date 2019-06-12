import * as actionTypes from './actionTypes';

export const createIssue = (issue: object) => {
    return{
        type: actionTypes.ADD_ISSUE,
        issue
    }
};

export const updateStatus = (issue_id: string, status: string) => {
    return{
        type: actionTypes.UPDATE_STATUS,
        issue_id,
        status
    }
};

export const changePriority = (issueId: string, priority: string) => {
    return{
        type: actionTypes.CHANGE_PRIORITY,
        issueId,
        priority
    }
}

export const assigneeUser = (issueId: string, userId: string) => {
    return{ 
        type: actionTypes.ASSIGNEE_USER,
        issueId,
        userId 
    }
};
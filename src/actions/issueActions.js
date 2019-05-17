import * as actionTypes from './actionTypes';

export const createIssue = (issue) => {
    return{
        type: actionTypes.ADD_ISSUE,
        issue
    }
}
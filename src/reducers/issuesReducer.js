import * as actionTypes from '../actions/actionTypes';

const initIssues = JSON.parse(localStorage.getItem("issues"));

export default (state = initIssues, action) => {
    let date = new Date();
    let id = date.getTime();
    switch (action.type){
        case actionTypes.ADD_ISSUE:
          let {title, description, project_id, assignee} = action.issue;
          return [
            ...state,
            {
              id: String(id),
              assignee: assignee,
              title: title,
              description: description,
              project_id: project_id,
              status: 'todo',
              date_created: String(date),
            }
          ];
        case actionTypes.UPDATE_STATUS: 
          return state.map(issue => 
            issue.id === action.issue_id ?
            {...issue, status: action.status, date_updated: String(date)} : issue
          );
        case actionTypes.ASSIGNEE_USER: 
            return state.map(issue => 
              issue.id === action.issueId ? 
              {...issue, assignee: action.userId, date_updated: String(date)} : issue
            );
        case actionTypes.CHANGE_PRIORITY:
            return state.map(issue => 
              issue.id === action.issueId ? 
              {...issue, priority: action.priority, date_updated: String(date)} : issue
              );
        default:
          return state;
    }
}
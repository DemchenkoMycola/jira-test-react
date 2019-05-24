import * as actionTypes from '../actions/actionTypes';

const initIssues = [
    {
        "id": "1",
        "title": "issue title",
        "description": "Issue 1 description",
        "project_id": "1",
        "creator_id": "1",
        "date_created": "Fri Jan 05 2001 00:00:00 GMT+0200 (Eastern European Standard Time)",
        "date_updated": "",
        "status": "in progress",
        "assigree": ["1", "2"]
      },
      {
        "id": "2",
        "title": "issue 0 title",
        "description": "Issue 1 description",
        "project_id": "2",
        "creator_id": "1",
        "date_created": "Fri Jan 05 2001 00:00:00 GMT+0200 (Eastern European Standard Time)",
        "date_updated": "",
        "status": "in progress",
        "assigree": ["1", "2"]
      },
      {
        "id": "3",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "2",
        "creator_id": "1",
        "date_created": "Fri Jan 05 2001 00:00:00 GMT+0200 (Eastern European Standard Time)",
        "date_updated": "",
        "status": "todo",
        "assigree": ["1", "2"]
      },
      {
        "id": "4",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "2",
        "creator_id": "2",
        "date_created": "Fri Jan 05 2001 00:00:00 GMT+0200 (Eastern European Standard Time)",
        "date_updated": "",
        "status": "todo",
        "assigree": ["1", "2"]
      },
      {
        "id": "5",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "1",
        "creator_id": "1",
        "date_created": "Fri Jan 05 2001 00:00:00 GMT+0200 (Eastern European Standard Time)",
        "date_updated": "",
        "status": "todo",
        "assigree": ["1", "2"]
      }
]

export default (state = initIssues, action) => {
    let date = new Date(2000, 12, 5);
    switch (action.type){
        case actionTypes.ADD_ISSUE:
          let {title, description, project_id} = action.issue;
          return [
            ...state,
            {
              title: title,
              description: description,
              project_id: project_id,
              date_created: String(date),
            }
          ];
        case actionTypes.UPDATE_STATUS: 
          return state.map(issue => 
            issue.id === action.issue_id ?
            {...issue, status: action.status, date_updated: String(date)} : issue
          );
        default:
          return state;
    }
}
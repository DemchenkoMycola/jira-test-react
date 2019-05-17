import * as actionTypes from '../actions/actionTypes';

const initIssues = [
    {
        "id": "1",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "1",
        "creator_id": "1",
        "date_created": "",
        "date_updated": "",
        "assigree": ["1", "2"]
      },
      {
        "id": "2",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "2",
        "creator_id": "1",
        "date_created": "",
        "date_updated": "",
        "assigree": ["1", "2"]
      },
      {
        "id": "3",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "2",
        "creator_id": "1",
        "date_created": "",
        "date_updated": "",
        "assigree": ["1", "2"]
      },
      {
        "id": "4",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "2",
        "creator_id": "2",
        "date_created": "",
        "date_updated": "",
        "assigree": ["1", "2"]
      },
      {
        "id": "5",
        "title": "issue 1 title",
        "description": "Issue 1 description",
        "project_id": "1",
        "creator_id": "1",
        "date_created": "",
        "date_updated": "",
        "assigree": ["1", "2"]
      }
]

export default (state = initIssues, action) => {
    switch (action.type){
        case actionTypes.ADD_ISSUE:
        let date = new Date(2000, 12, 5);
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
        default:
        return state;
    }
}
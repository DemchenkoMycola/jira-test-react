import * as actionTypes from '../actions/actionTypes';

const initProjects = [
    {
        "id": "1",
        "title": "project 1",
        "description": "description to project 1",
        "link": "http://google.com",
        "users": ["1", "2"]
      },
      {
        "id": "2",
        "title": "project 2",
        "description": "description to project 3",
        "link": "http://google.com",
        "users": ["1", "2"]
      }
];

export default (state = initProjects, action) => {
    switch (action.type){
        case actionTypes.ADD_NEW_PROJECT:
        // console.log(action)
        let {title, description, link} = action.project;
        return [
            ...state,
            {
                id: new Date().getTime(),
                title: title,
                description: description,
                link: link
            }
        ];
        case actionTypes.DEL_PROJECT:
        return state.filter((data, i) => i !== action.id);
        default:
        return state;
    }
}
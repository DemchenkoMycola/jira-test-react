import * as actionTypes from '../actions/actionTypes';

const initProjects = JSON.parse(localStorage.getItem("projects"));

export default (state = initProjects, action) => {
    switch (action.type){
        case actionTypes.ADD_NEW_PROJECT:
        let {title, description, link, users} = action.project;
        return [
            ...state,
            {
                id: new Date().getTime(),
                title: title,
                description: description,
                link: link,
                users
            }
        ];
        case actionTypes.DEL_PROJECT:
          return state.filter((data, i) => data.id !== action.id);
        default:
          return state;
    };
}
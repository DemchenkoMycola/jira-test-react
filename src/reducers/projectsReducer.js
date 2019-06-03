import * as actionTypes from '../actions/actionTypes';

const initProjects = JSON.parse(localStorage.getItem("projects"));

export default (state = initProjects, action) => {
    switch (action.type){
        case actionTypes.ADD_NEW_PROJECT:
        let {title, description, link, users} = action.project;
        return [
            ...state,
            {
                id: String(new Date().getTime()),
                title: title,
                description: description,
                link: link,
                users: users
            }
        ];
        case actionTypes.DEL_PROJECT:
          return state.filter((data, i) => data.id !== action.id);
        case actionTypes.ALLOW_USER:
            state = state.map(project => {
                if(project.id === action.projectId){
                     return {
                        ...project,
                        users: [...project.users, action.userId]
                    };
                }else{
                    return project
                }
            })
            return state;
        case actionTypes.DISALLOW_USER:
            state = state.map(project => {
                if(project.id === action.projectId){
                    return {...project,
                        users: project.users.filter(user => {
                            return user !== action.userId
                        })
                    }
                }else{
                    return project
                }
            })
            return state;
        default:
          return state;
    };
}
import * as actionTypes from '../actions/actionTypes';

const initUsers = JSON.parse(localStorage.getItem("users") || '{}');

export default (state = initUsers, action: any) => {
    switch (action.type){
        case actionTypes.ADD_USER:
            let {username, email, password} = action.user;
            return [
                ...state,
                {
                    id: String(new Date().getTime()),
                    name: username,
                    email: email,
                    password: password,
                }
            ]
        default: 
        return state;
    }
}
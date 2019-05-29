import * as actionTypes from '../actions/actionTypes';

const initUsers = JSON.parse(localStorage.getItem("users"));

export default (state = initUsers, action) => {
    switch (action.type){
        case actionTypes.ADD_USER:
            let {username, email, password} = action.user;
            return [
                ...state,
                {
                    id: new Date().getTime(),
                    username: username,
                    email: email,
                    password: password
                }
            ]
        default: 
        return state;
    }
}
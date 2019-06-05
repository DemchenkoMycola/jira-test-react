import * as actionTypes from './actionTypes';

export const addUser = (user) => {
    return {
        type: actionTypes.ADD_USER,
        user
    }
};

export const loginUser = (user) => {
    return {
        type: actionTypes.LOGIN_USER,
        user
    }
}

export const logoutUser = () => {
    return{
        type: actionTypes.LOGOUT_USER
    }
}
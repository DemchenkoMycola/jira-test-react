import * as actionTypes from './actionTypes';

export const addUser = (user: object) => {
    return {
        type: actionTypes.ADD_USER,
        user
    }
};

export const loginUser = (user: object) => {
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
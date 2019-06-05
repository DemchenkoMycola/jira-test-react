import * as actionTypes from '../actions/actionTypes';

export default (state = null, action ) => {
    switch (action.type){
        case actionTypes.LOGIN_USER:
            return state = action.user;
        case actionTypes.LOGOUT_USER:
            // console.log('logout')
            return state = null
        default: 
            return state;
    }
}
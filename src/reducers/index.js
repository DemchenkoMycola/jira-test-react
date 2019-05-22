import {combineReducers} from 'redux';
import projects from './projectsReducer';
import issues from './issuesReducer';
import users from './usersReducer';

export default combineReducers({
    projects,
    issues,
    users
});
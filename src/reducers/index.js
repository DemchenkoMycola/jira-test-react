import {combineReducers} from 'redux';
import projects from './projectsReducer';
import issues from './issuesReducer';
import users from './usersReducer';
import user from './user';

export default combineReducers({
    projects: projects,
    issues: issues,
    users: users, 
    user: user
});
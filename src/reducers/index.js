import {combineReducers} from 'redux';
import projects from './projectsReducer';
import issues from './issuesReducer';

export default combineReducers({
    projects,
    issues
});
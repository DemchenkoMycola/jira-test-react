import * as actionTypes from './actionTypes';

export const createProject = (project) => {
    return {
        type: actionTypes.ADD_NEW_PROJECT,
        project
    }
};

export const deleteProject = (id) => {
    return {
        type: actionTypes.DEL_PROJECT,
        id
    }
}
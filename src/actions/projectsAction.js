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
};

export const allowUser = (userId, projectId) => {
    return {
        type: actionTypes.ALLOW_USER,
        userId,
        projectId
    }
}

export const disallowUser = (userId, projectId) => {
    return {
        type: actionTypes.DISALLOW_USER,
        userId,
        projectId
    }
}
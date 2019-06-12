import * as actionTypes from './actionTypes';

export const createProject = (project: object) => {
    return {
        type: actionTypes.ADD_NEW_PROJECT,
        project
    }
};

export const deleteProject = (id: string) => {
    return {
        type: actionTypes.DEL_PROJECT,
        id
    }
};

export const allowUser = (userId: string, projectId: string) => {
    return {
        type: actionTypes.ALLOW_USER,
        userId,
        projectId
    }
}

export const disallowUser = (userId: string, projectId: string) => {
    return {
        type: actionTypes.DISALLOW_USER,
        userId,
        projectId
    }
}
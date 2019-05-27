import * as userActions from '../actions/userActions';
import * as projectsActions from '../actions/projectsAction';
import * as issuesActions from '../actions/issueActions';
import * as types from '../actions/actionTypes';

describe('projects actions', () => {
    it('should create new project', () => {
        const project = {
            title: 'new project',
            description: 'new project description',
            link: 'http://blblbla.com'
        }
        const expectAction = {
            type: types.ADD_NEW_PROJECT,
            project
        }

        expect(projectsActions.createProject(project)).toEqual(expectAction)
    });

    it('should delete project', () => {
        const id = '1'
        const expectAction = {
            type: types.DEL_PROJECT,
            id
        }

        expect(projectsActions.deleteProject(id)).toEqual(expectAction)
    });
});

describe('issues actions', () => {
    it('should create new issue', () => {
        const issue = {
            title: 'new issue',
            description: 'new issue description',
        }
        const expectAction = {
            type: types.ADD_ISSUE,
            issue
        }

        expect(issuesActions.createIssue(issue)).toEqual(expectAction)
    });

    it('should update issue status', () => {
        const status = 'completed';
        const issue_id = '1';
        const expectAction = {
            type: types.UPDATE_STATUS,
            status, 
            issue_id
        }

        expect(issuesActions.updateStatus(issue_id, status)).toEqual(expectAction);
    });

});

describe('user actions', () => {
    it('should create action to add user', () => {
        const user = {
            name: '1234',
            email: 'ababab@gmail.com',
            password: '123412351'
        }
        const expectAction = {
            type: types.ADD_USER,
            user
        }
        expect(userActions.addUser(user)).toEqual(expectAction)
    })
})
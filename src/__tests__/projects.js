import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';

import ProjectItem from '../components/projects/ProjectItem';
import ProjectsForm from '../components/projects/AddProjects';

describe('projects', () => {
    const store = createStore(() => ({}));

    test('should render project item', () => {

        const project = {
            "id": "1",
            "title": "project 1",
            "description": "description to project 1",
            "link": "http://google.com",
            "users": ["1", "2"]
          };

        const item = shallow(<ProjectItem project={project} />);

        expect(item).toMatchSnapshot();

    });

    test('should render project from', () => {
        const form = renderer.create(<ProjectsForm store={store} />)
        expect(form).toMatchSnapshot();
    });

});

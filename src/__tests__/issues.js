import React from 'react';
// import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import IssuesForm from '../components/issues/AddIssue';

describe('issues', () => {

    const store = createStore(() => ({}));

    test('should render project from', () => {
        const form = renderer.create(<IssuesForm store={store} />)
        expect(form).toMatchSnapshot();
    });

});
import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import IssuesForm from '../components/issues/AddIssue';
import IssueItem from '../components/issues/IssueItem';

describe('issues', () => {

    const store = createStore(() => ({}));

    test('should render project from', () => {
        const form = renderer.create(<IssuesForm store={store} />)
        expect(form).toMatchSnapshot();
    });

    test('should render issue item', () => {
        const issue = {
            "id": "1",
            "title": "issue title",
            "description": "Issue 1 description",
            "project_id": "1",
            "creator_id": "1",
            "date_created": "Fri Jan 05 2001 00:00:00 GMT+0200 (Eastern European Standard Time)",
            "date_updated": "",
            "status": "in progress",
            "assigree": ["1", "2"]
          };

          const item = shallow(<IssueItem issue={issue} />);
          expect(item).toMatchSnapshot();

    });

});
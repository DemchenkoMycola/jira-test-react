import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import Home from '../views/Home';
import Projects from '../views/Projects';
import NoMatch from '../views/NoMatch';
import { createStore } from 'redux';

describe('test router', () => {

    const store = createStore(() => ({}));

    test('render home page without crashing', () => {
        const wrapper = mount(
            <Provider store={store} >
                <MemoryRouter initialEntries={[ '/' ]}>
                    <Home />
                </MemoryRouter>
            </Provider>
        );
        expect(wrapper.find(Home)).toHaveLength(1);
        expect(wrapper.find(NoMatch)).toHaveLength(0);
    });

    test('render 404 page', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[ '/1235425' ]} >
                <NoMatch />
            </MemoryRouter>
        );
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(NoMatch)).toHaveLength(1);
    });

});
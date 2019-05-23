import React from 'react';
import Register from '../components/Register'
import renderer from 'react-test-renderer';
import { createStore } from 'redux';

describe('register', () => {

    const store = createStore(() => ({}));

    test('render register form', () => {
        const login = renderer.create(<Register store={store} />);
        expect(login).toMatchSnapshot();
    });

});
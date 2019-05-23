import React from 'react';
import Login from '../components/Login'
import renderer from 'react-test-renderer';
import { createStore } from 'redux';

describe('login', () => {

    const store = createStore(() => ({}));

    test('render login form', () =>{
        const login = renderer.create(<Login store={store} />).toJSON();
        expect(login).toMatchSnapshot();
    })

});
import React from 'react';
import App from '../App'
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('app', () =>{
    const store = createStore(() => ({}));

    it('render without crashing', () =>{
       const app = renderer.create(
            <Provider store={store}>
                <App />
            </Provider>)
            .toJSON();
        expect(app).toMatchSnapshot()
    });

});
import { createStore } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(){
    let store = createStore(rootReducer);

    store.subscribe(() => {
       let { users, projects, issues } = store.getState();
       localStorage.setItem("users", JSON.stringify(users));
       localStorage.setItem("projects", JSON.stringify(projects));
       localStorage.setItem("issues", JSON.stringify(issues));
    });

    return store;
}
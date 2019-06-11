import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home';
import Projects from './views/Projects';
import Issues from './views/Issues';
import NoMatch from './views/NoMatch';
import ProjectDetails from './views/ProjectDetails';

const App = () => {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/:userId" component={Projects} />
            <Route path="/issues/:id" component={Issues} /> 
            <Route path="/details/:id" component={ProjectDetails} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </main>
    );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Projects from './views/Projects'
import Issues from './views/Issues'
import NoMatch from './views/NoMatch'

const App = () => {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/:userId" component={Projects} />
            <Route path="/issues/:id" component={Issues} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </main>

    );
}

export default App;

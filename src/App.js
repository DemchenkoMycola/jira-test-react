import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Projects from './views/Projects'
import Issues from './views/Issues'

const App = () => {
    return (
      <main>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects/:userId" component={Projects} />
            <Route path="/issues/:id" component={Issues} />
          </Switch>
        </Router>
      </main>

    );
}

export default App;

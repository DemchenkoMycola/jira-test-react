import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './views/Home'
import Projects from './views/Projects'
import Issues from './views/Issues'

class App extends React.Component {
  render(){
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/issues" component={Issues} />
          </Switch>
        </Router>
    );
  }
}

export default App;

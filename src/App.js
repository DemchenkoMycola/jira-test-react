import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './views/Home'
import Projects from './views/Projects'
import Issues from './views/Issues'

class App extends React.Component {
  render(){
    return (
        <Router>
          <header>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/issues">Issues</Link>
              </li>
            </ul>
          </header>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/issues" component={Issues} />
        </Router>
    );
  }
}

export default App;

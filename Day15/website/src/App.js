import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Router>
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </Router>
    </Fragment>
  );
}

const Home = () => {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <h2>Contact</h2>
    </div>
  );
}

const NoMatch = () => {
  return (
    <div>
      <h2>No found</h2>
    </div>
  );
}

export default App;

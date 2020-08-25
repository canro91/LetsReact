import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Navigation from './components/Navigation';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <Fragment>
      <Layout>
        <Router>
          <Navigation />
          <Jumbotron />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </Fragment>
  );
}

export default App;

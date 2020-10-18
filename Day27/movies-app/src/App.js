import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Movie from './components/Movie';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/movie/:id" component={Movie} />
      <Footer />
    </Router>
  );
}

export default App;

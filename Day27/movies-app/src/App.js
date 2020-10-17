import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Home />
      <Footer />
    </Provider>
  );
}

export default App;

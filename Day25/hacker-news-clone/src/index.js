import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App stories={store.getState().storyState} onArchive={() => {}} />
  </React.StrictMode>,
  document.getElementById('root')
);
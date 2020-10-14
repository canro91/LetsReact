import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import './index.css';
import { STORY_ARCHIVE } from './constants/actionTypes';

ReactDOM.render(
  <React.StrictMode>
    <App
      stories={store.getState().storyState}
      onArchive={(id) => store.dispatch({ type: STORY_ARCHIVE, id })}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
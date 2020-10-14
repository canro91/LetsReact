import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import './index.css';
import { STORY_ARCHIVE } from './constants/actionTypes';
import { getReadableStories } from './selectors/story';

// Here getReadableStories is like a fancy mapStateToProps

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App
        stories={getReadableStories(store.getState())}
        onArchive={(id) => store.dispatch({ type: STORY_ARCHIVE, id })}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
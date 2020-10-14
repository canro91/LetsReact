import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import './index.css';
import { getReadableStories } from './selectors/story';
import { doArchiveStory } from './actions/archive';

// Here getReadableStories is like a fancy mapStateToProps

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App
        stories={getReadableStories(store.getState())}
        onArchive={(id) => store.dispatch(doArchiveStory(id))}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();
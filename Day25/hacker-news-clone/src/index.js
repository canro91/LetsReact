import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';

const stories = [
  {
    title: 'React',
    url: 'https://facebook.github.io/react/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
  {
    title: 'Learn React in 30 days',
    url: 'https://github.com/canro91/LetsReact.git',
    author: 'me',
    num_comments: 5,
    points: 5,
    objectID: 2
  }
];

ReactDOM.render(
  <React.StrictMode>
    <App stories={stories} onArchive={() => {}} />
  </React.StrictMode>,
  document.getElementById('root')
);
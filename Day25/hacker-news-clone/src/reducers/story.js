const INITIAL_STATE = [
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

const storyReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
          return state;
    }
}

export default storyReducer;
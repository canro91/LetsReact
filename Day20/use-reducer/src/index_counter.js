import React from 'react';
import ReactDOM from 'react-dom';

function Counter () {
  const [count, dispatch] = React.useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state + 1;

      case 'substract':
        return state - 1;

      default:
        return state;
    }
  }, 0);

  return (
    <>
      {count}

      <button onClick={() => dispatch('add')}>Increment</button>
      <button onClick={() => dispatch('substract')}>Decrement</button>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>,
  document.getElementById('root')
);
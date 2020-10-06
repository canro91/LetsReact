import React from 'react';
import ReactDOM from 'react-dom';

function ShoppingList() {
  const inputRef = React.useRef();
  const [items, dispatch] = React.useReducer((state, action) => {
    switch (action.type) {
      case 'add':
        return [...state, { id: state.length, name: action.name }];

      case 'remove':
        return state.filter((_, index) => index !== action.index);

      case 'clear':
        return [];

      default:
        return state;
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({
      type: 'add',
      name: inputRef.current.value
    });

    inputRef.current.value = '';
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <button onClick={() => dispatch({ type: 'clear' })}>Clear</button>
      <ul>
        {
          items.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button onClick={() => dispatch({ type: 'remove', index })}>x</button>
            </li>
          ))
        }
      </ul>
    </>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <ShoppingList />
  </React.StrictMode>,
  document.getElementById('root')
);
import React from 'react';
import ReactDOM from 'react-dom';

const initialTodos = [
  {
    id: 'a',
    task: 'Learn React in 30 days',
    complete: false
  },
  {
    id: 'b',
    task: 'Learn anything else in 30 days',
    complete: false
  }
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'DO_TODO':
      return state.map(todo => {
        if (todo.id == action.id) {
          return { ...todo, complete: true };
        } else {
          return todo;
        }
      });

    case 'UNDO_TODO':
      return state.map(todo => {
        if (todo.id == action.id) {
          return { ...todo, complete: false };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

const App = () => {
  const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);

  const handleChange = (todo) => {
    const type = todo.complete ? 'UNDO_TODO' : 'DO_TODO';
    dispatch({ type: type, id: todo.id });
  };

  return (
    <ul>
      {
        todos.map(todo => (
          <li key={todo.id}>
            <label>
              <input type="checkbox"
                checked={todo.complete}
                onChange={() => handleChange(todo)}
              />

              {todo.task}
            </label>
          </li>
        ))
      }
    </ul>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
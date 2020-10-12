import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { INCREMENT, DECREMENT, RESET } from './actions';
import App from './App';

// Step 2. Create a reducer
// It's just like the function you use with React.useReducer
// A reducer should define the initial state too
const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  console.log('2. I am the reducer', state, action);

  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };

    case DECREMENT:
      return { count: state.count - 1 };

    case RESET:
      return { count: 0 };

    default:
      return state;
  }
}

// Step 1. Create a store
// Redux call the reducer when creating the store
// Notice the console.log order
console.log('1. I am about to create the store')
const store = createStore(reducer);
console.log('3. It is after creating the store');

// Simulate some dispatch calls
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'RESET' });

// Notice how it's similar to GlobalContext.Provider from Day21
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
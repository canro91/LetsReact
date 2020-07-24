# Notes

* Preferred way of declaring state? `state` vs `React.useState`? Use `useState` only inside function component. They don't work on class components. See[Hooks-state](https://reactjs.org/docs/hooks-state.html#hooks-and-function-components)
* Naming conventions: `on[Event]` and `handle[Event]`
* [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) `array.slice() = array[:]` 
* A controlled component is a stateless component. It only displays some values and informs its parents on events
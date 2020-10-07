# Notes

* [How to useContext in React?](https://www.robinwieruch.de/react-usecontext-hook)

```javascript
// src/ThemeContext.js
import React from 'react';

const ThemeContext = React.createContext(null);

export default ThemeContext;
```

```javascript
import React from 'react';
import ThemeContext from './ThemeContext';

const Parent = () => (
    <ThemeContext.Provider value="anAwesomeColor">
        <Child />
    </ThemeContext.Provider>
);
```

```javascript
import React from 'react';
import ThemeContext from './ThemeContext';

const Child = () => {
    const color = React.useContext(ThemeContext);

    return (
        My color is: {color}
    )
}
```

* You can create a wrapper component with the context provider

```javascript
import ThemeContext from './ThemeContext';

const MyProvider = ({ children }) => (
    <ThemeContext.Provider value="anAwesomeColor">
        {children}
    </ThemeContext.Provider>
)
```

* Instead of passing the `dispatch` function from the `GlobalState`, pass functions that call `dispatch` instead. This way, there is no duplication of action types
* See: [useLocalStorage](https://usehooks.com/useLocalStorage/) and [Using Local Storage in React](https://typeofnan.dev/using-local-storage-in-react-with-your-own-custom-uselocalstorage-hook/)
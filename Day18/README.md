# Notes

* [classanames](https://github.com/JedWatson/classnames), [A Little Bit of JavaScript: classnames](https://dev.to/jbranchaud/a-little-bit-of-javascript-classnames-2icp)
* [How to add multiple classes to a ReactJS Component?](https://stackoverflow.com/a/37073268)
```javascript
const anotherClass = shouldAddAnotherClass ? 'antoherClass' : '';
const classes = `aClass ${anotherClass}`
```
* [setTimeout using Hooks](https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks)
* [Using window.addEventListener with react hooks](https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/)
```javascript
useEffect(() => {
    // initiate the event handler
    window.addEventListener(event, handler, passive);

    // this will clean up the event every time the component is re-rendered
    return () => {
      window.removeEventListener(event, handler);
    };
});
```
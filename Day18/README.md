# Notes

* [classnames package](https://github.com/JedWatson/classnames), [A Little Bit of JavaScript: classnames](https://dev.to/jbranchaud/a-little-bit-of-javascript-classnames-2icp)
* [How to add multiple classes to a ReactJS Component?](https://stackoverflow.com/a/37073268)
```javascript
const anotherClass = shouldAddAnotherClass ? 'antoherClass' : '';
const classes = `aClass ${anotherClass}`;
```
* [Use Multiple Effects to Separate Concerns](https://reactjs.org/docs/hooks-effect.html#tip-use-multiple-effects-to-separate-concerns)
* [setInterval using Hooks](https://overreacted.io/making-setinterval-declarative-with-react-hooks/)
* [setTimeout using Hooks](https://upmostly.com/tutorials/settimeout-in-react-components-using-hooks)
* [addEventListener using Hooks](https://atomizedobjects.com/blog/react/add-event-listener-react-hooks/)
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
* Small state vs large state
  * [3 Rules of React State Management](https://dmitripavlutin.com/react-state-management/)
  * [Should I use one or many state variables?](https://reactjs.org/docs/hooks-faq.html#should-i-use-one-or-many-state-variables)
* [Import function from another file](https://stackoverflow.com/questions/48211891/import-functions-from-another-js-file-javascript)
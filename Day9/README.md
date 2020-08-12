# Notes

* [getBoundingClientRect](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) returns the size of an element and its position relative to the viewport
* [ref](https://reactjs.org/docs/refs-and-the-dom.html) is a pointer/reference to a DOM element. It can only be used with class components. See: [How to Use React Refs](https://medium.com/@rossbulat/how-to-use-react-refs-4541a7501663)

```javascript
class MyComponent extends React.Component {
 constructor(props) {
   super(props)
   this.myRef = React.createRef();
 }
 ...
 render() {
   return (
    <Fragment>
      <input
        name="email"
        onChange={this.onChange}
        ref={this.myRef}
        type="text"
    </Fragment>
   )
 }
}
```

* [pageXOffset/pageYOffset](https://www.w3schools.com/jsref/prop_win_pagexoffset.asp) returns the pixels the current document has been scrolled from the upper left corner of the window, horizontally and vertically.
* [clientLeft/clientTop](https://www.w3schools.com/jsref/prop_element_clientleft.asp) returns the width of the left/top border of an element, in pixels.
* [Game of Live Interesting patterns](http://pi.math.cornell.edu/~lipa/mec/lesson6.html)
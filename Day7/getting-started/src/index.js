import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// "Old" syntax
// class Hi extends Component {
//   render() {
//     return (
//       <div className="hello">
//         <h1>Hello, {this.props.name}!!!</h1>
//       </div>
//     )
//   }
// }

// ES6-powered syntax
// It uses
// Object deconstruction ({ name }) instead of (props)
// Arrow functions () => {} instead of function XXX() {}
// Remove brackets for one-liners. Implicit return
const Hi = ({ name }) => (
  <div className="hello">
    <h1>Hello, {name}!!!</h1>
  </div>
)
ReactDOM.render(<Hi name="Alice" />, document.querySelector('#root'))

const MediaCard = ({ title, body, imageUrl }) => (
  <div>
    <h2>{title}</h2>
    <p>{body}</p>
    <img src={imageUrl} />
  </div>
)
ReactDOM.render(<MediaCard title="MasterCard" body="You can buy anything else" imageUrl="https://duckduckgo.com/i/567266dc.png"/>, document.querySelector('#root'))

const Gate = (isOpen) => <div>{isOpen ? 'open' : 'close'}</div>
ReactDOM.render(<Gate isOpen={true} />, document.querySelector('#root'))
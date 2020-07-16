import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class Hi extends Component {
  render() {
    return (
      <div className="hello">
        <h1>Hello, Alice!!!</h1>
        <p>What is React?</p>
        <ul>
          <li>JavaScript framework</li>
          <li>What to impress your friend?</li>
          <li>The next big thing?</li>
          <li>{5 + 10}</li>
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<Hi />, document.querySelector('#root'))
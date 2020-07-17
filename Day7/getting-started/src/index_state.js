import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Room() {
    const [isLit, setLit] = React.useState(true);
    const [temperature, setTemperature] = React.useState(22);
    const brightness = isLit ? 'isLit' : 'isDark'

    return (
        <div className={`room ${brightness}`}>
            <p>the room is {isLit ? 'lit' : 'dark'}</p>
            <p>Temperature: {temperature}</p>
            <button onClick={() => setLit(!isLit)}>flip</button>
            <button onClick={() => setLit(true)}>on</button>
            <button onClick={() => setLit(false)}>off</button>
            <button onClick={() => setTemperature(temperature+1)}>+</button>
            <button onClick={() => setTemperature(temperature-1)}>-</button>
        </div>
    )
}

ReactDOM.render(<Room />, document.getElementById('root'))
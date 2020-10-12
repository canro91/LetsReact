import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {

    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    }

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    }

    const reset = () => {
        dispatch({ type: 'RESET' });
    }
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>

            <button onClick={reset}>Reset</button>
        </div>
    );
}

// Without Redux
// export default Counter;

// Step 3. Connect the store with the component
// It pulls from the state what Counter needs
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}
export default connect(mapStateToProps)(Counter);
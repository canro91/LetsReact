import React from 'react';
import { DECREMENT, RESET } from './actions';
import { increment } from './actions';
import { connect } from 'react-redux';

const Counter = ({ count, dispatch }) => {

    const handleIncrement = () => {
        // Step 4. Use dispatch to update state
        // You can choose to abstract the creation of actions, too
        dispatch(increment());
    }

    const decrement = () => {
        dispatch({ type: DECREMENT });
    }

    const reset = () => {
        dispatch({ type: RESET });
    }
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
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
import React from 'react';
import { increment, decrement, reset } from './actions';
import { connect } from 'react-redux';

const Counter = ({ count, increment, decrement, reset }) => {

    const handleIncrement = () => {
        // Step 4. Use dispatch to update state
        // dispatch({ type: INCREMENT });

        // You can choose to abstract the creation of actions, too
        // dispatch(increment());

        // You can choose to pass the custom functions directly instead of using dipatch
        // See mapDispatchToProps
        increment();
    }

    const handleDecrement = () => {
        decrement();
    }

    const handleReset = () => {
        reset();
    }
    return (
        <div>
            <h2>Counter</h2>
            <div>
                <button onClick={handleDecrement}>-</button>
                <span>{count}</span>
                <button onClick={handleIncrement}>+</button>
            </div>

            <button onClick={handleReset}>Reset</button>
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

// It override dispatch with these custom functions
const mapDispatchToProps = {
    increment,
    decrement,
    reset
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
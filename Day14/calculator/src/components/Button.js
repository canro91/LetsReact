import React from 'react';
import './Button.css'

const Button = ({ children, handleClick }) => {
    const isOperand = (value) => {
        return !isNaN(value) || value === '.' || value === '=';
    }

    return (
        <div
            className={`button-wrapper ${isOperand(children) ? null : 'operator'}`}
            onClick={() => handleClick(children)}
        >
            {children}
        </div>
    )
}

export default Button
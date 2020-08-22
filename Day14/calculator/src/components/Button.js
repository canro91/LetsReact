import React from 'react';
import './Button.css'

const Button = ({ children }) => {
    const isOperand = (value) => {
        return !isNaN(value) || value === '.' || value === '=';
    }

    return (
        <div className={`button-wrapper ${isOperand(children) ? null : 'operator'}`}>
            {children}
        </div>
    )
}

export default Button
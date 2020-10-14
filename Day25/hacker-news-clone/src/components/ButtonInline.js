import React from 'react';

const ButtonInline = ({ onClick, type = 'button', children }) => (
    <button
        type={type}
        className="button-inline"
        onClick={onClick}
    >
        { children }
    </button>
);

export default ButtonInline;
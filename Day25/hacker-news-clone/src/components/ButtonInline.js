import React from 'react';
import Button from './Button';

const ButtonInline = ({ onClick, type = 'button', children }) => (
    <Button
        type={type}
        className="button-inline"
        onClick={onClick}
    >
        {children}
    </Button>
);

export default ButtonInline;
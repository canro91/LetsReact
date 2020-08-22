import React from 'react';
import './ClearButton.css'

const ClearButton = ({ children, handleClear }) => {
    return (
        <div className="clear-btn" onClick={handleClear}>
            {children}
        </div>
    );
}

export default ClearButton;
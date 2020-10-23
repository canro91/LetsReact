import React from 'react';

const LogEntry = ({ entry }) => {
    return (
        <div className="popup">
            <img className="preview" width={200} height={200} src={entry.image} />
            <h3>{entry.title}</h3>
            <p>{entry.comments}</p>
            <small>Visited on: {new Date(entry.visitDate).toLocaleDateString()}</small>
        </div>
    );
}

export default LogEntry;
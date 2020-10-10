import React from 'react';
import './Input.css'

const Input = ({ sendMessage }) => {
    const [message, setMessage] = React.useState('');

    const handleSendMessage = (e) => {
        e.preventDefault();

        sendMessage(message);
        setMessage('');
    }

    return (
        <form className="form">
            <input
                className="input"
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyPress={e => e.key === 'Enter' ? handleSendMessage(e) : null}
            />
            <button className="sendButton" onClick={e => handleSendMessage(e)}>Send</button>
        </form>
    );
}

export default Input;
import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';
import './MessageList.css';

const MessageList = ({ messages, name }) => {
    return (
        <ScrollToBottom className="messages">
            {
                messages.map((msg, index) =>
                    (<div key={index}>
                        <Message message={msg} name={name} />
                    </div>))
            }
        </ScrollToBottom>
    );
}

export default MessageList;
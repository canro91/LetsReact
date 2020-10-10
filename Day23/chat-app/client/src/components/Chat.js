import React from 'react';
import { useParams, useLocation } from 'react-router';
import io from 'socket.io-client';

const ENDPOINT = 'http://192.168.99.100:5000';

let socket;

const Chat = () => {
    const { room } = useParams();
    const { state: { name } } = useLocation();
    const [messages, setMessages] = React.useState([]);

    React.useEffect(() => {
        socket = io(ENDPOINT);
        socket.on('connect', () => {
            socket.emit('join', { name, room, at: new Date() }, (error) => {
                console.error(error);
            });
        });

        socket.on('message', (data) => {
            console.log(data);
            setMessages(messages.concat(data));
        });

        return () => {
            socket.emit('disconnet', { name, room, at: new Date() });

            socket.off();
        };

    }, [room, name]);

    return (
        <div>
            <h1>Chat</h1>
            <h2>Welcome {name} to {room}</h2>

            <ul>
                {
                    messages.map((msg, index) => <li key={index} className={msg.user === 'admin' ? 'admin': 'normal'}>{msg.text}</li>)
                }
            </ul>

        </div>
    );
}

export default Chat;
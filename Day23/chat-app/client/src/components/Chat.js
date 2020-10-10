import React from 'react';
import { useParams, useLocation } from 'react-router';
import io from 'socket.io-client';

const ENDPOINT = 'http://192.168.99.100:5000';

let socket;

const Chat = () => {
    const { room } = useParams();
    const { state: { name } } = useLocation();

    React.useEffect(() => {
        socket = io(ENDPOINT);
        socket.on('connect', () => {
            socket.emit('join', { name, room, at: new Date() });
        });

        socket.on('broadcast', (data) => {
            console.log(data);
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

        </div>
    );
}

export default Chat;
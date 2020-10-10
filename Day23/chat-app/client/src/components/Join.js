import React from 'react';
import io from 'socket.io-client';

const Join = (props) => {
    React.useEffect(() => {
        console.log('trying to connect...');

        const socket = io('http://192.168.99.100:5000');
        socket.on('connect', () => {
            socket.emit('join', 'Hello World from client');
        });

        socket.on('broadcast', (data) => {
            console.log(data);
        });

    }, []);

    return (
        <div>
            <h1>Join</h1>
        </div>
    );
}

export default Join;
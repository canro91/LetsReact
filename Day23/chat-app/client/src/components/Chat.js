import React from 'react';
import { useParams, useLocation } from 'react-router';
import io from 'socket.io-client';
import InfoBar from './InfoBar';
import Input from './Input';
import MessageList from './MessageList';
import TextContainer from './TextContainer';
import './Chat.css';

const ENDPOINT = 'http://192.168.99.100:5000';

let socket;

const Chat = () => {
    const { room } = useParams();
    const { state: { name } } = useLocation();

    const [allMessages, setAllMessages] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        socket = io(ENDPOINT);
        socket.on('connect', () => {
            socket.emit('join', { name, room, at: new Date() }, (error) => {
                if (error) {
                    console.error(error);
                }
            });
        });

        return () => {
            socket.emit('disconnet', { name, room, at: new Date() });

            socket.off();
        };

    }, [room, name]);

    React.useEffect(() => {
        socket.on('message', (message) => {
            setAllMessages([...allMessages, message]);
        });

        socket.on("roomInfo", ({ users }) => {
            setUsers(users);
        });
    }, []);

    const sendMessage = (message) => {
        setAllMessages([...allMessages, { user: name, text: message }]);
        socket.emit('sendMessage', message);
    }

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <MessageList messages={allMessages} name={name} />
                <Input sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    );
}

export default Chat;
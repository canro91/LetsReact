const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const colors = require('colors');
const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', socket => {
    socket.on('join', (data, callback) => {
        console.log('connect', data);

        const { name, room } = data;
        const { error, user } = addUser({ id: socket.id, name, room })
        if (error) {
            return callback(error);
        }

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `Welcome ${user.name} to ${user.room}!` });
        socket.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined ${user.room}!` });

        socket.to(user.room).emit('roomInfo', { room: user.room, users: getUsersInRoom(user.room) });
        socket.emit('roomInfo', { room: user.room, users: getUsersInRoom(user.room) });

        callback();
    });

    socket.on('sendMessage', (message) => {
        const user = getUser(socket.id);

        socket.to(user.room).emit('message', { user: user.name, text: message });
    });

    // socket.on('disconnecting', (data) => {
    //     console.log('disconneting', data);
    //     const user = removeUser(socket.id);
    //     if (user) {
    //         socket.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left!` });

    //         socket.to(user.room).emit('roomInfo', { room: user.room, users: getUsersInRoom(user.room) });
    //     }
    // });

    socket.on('disconnect', (data) => {
        console.log('disconneting', data);

        const user = removeUser(socket.id);
        if (user) {
            socket.to(user.room).emit('message', { user: 'admin', text: `${user.name} has left!` });

            socket.to(user.room).emit('roomInfo', { room: user.room, users: getUsersInRoom(user.room) });
        }
    });
});

app.use(router);

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Server running mode on port ${port}`.yellow.bold));
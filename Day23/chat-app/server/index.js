const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const colors = require('colors');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connect', socket => {
    console.log('connect');

    socket.on('join', (data) => {
        const { name, room } = data;
    	console.log(data);
        socket.broadcast.emit('broadcast', `${name} has joined ${room}`);
    });

    socket.on('disconnect', (data) => {
        console.log('disconnet', data);
    });
});

app.use(router);

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Server running mode on port ${port}`.yellow.bold));
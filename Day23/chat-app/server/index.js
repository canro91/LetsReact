const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const colors = require('colors');
const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);
io.origins('*:*');

io.on('connect', socket => {
    console.log('connect');

    socket.on('join', (data) => {
    	console.log(data);
        socket.broadcast.emit('broadcast', 'A new user has joined');
    });

    socket.on('disconnect', () => {
        console.log('disconnet');
    });
});

app.use(router);

const port = process.env.PORT || 5000;
server.listen(port, console.log(`Server running mode on port ${port}`.yellow.bold));
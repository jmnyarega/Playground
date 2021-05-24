var express = require('express');
var socket = require('socket.io');

// setup
var app = express();

var server = app.listen(7777, function() {
    console.log("listening on port 7777");
});

app.use(express.static('public'));


var io = socket(server);

io.on('connection', function(socket) {
    console.log('made socket connection', socket.id);
    socket.on('chat', function(data) {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', function(data) {
        // sends data to every other client expect `this`
        socket.broadcast.emit('typing', data);
    });
});
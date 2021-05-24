// make connection
var socket = io('http://localhost:7777/');

// Query DOM
var btn = document.getElementById('send'),
    feedback = document.getElementById('feedback'),
    output = document.getElementById('output');


// emit events
btn.addEventListener('click', function() {
    let message =  document.getElementById("message").value;
    let handle =  document.getElementById('handle').value;
    socket.emit('chat', {
        message,
        handle
    });
});

// listen for events
socket.on('chat', function(data) {
    feedback.innerHTML = ``;
    output.innerHTML += `<p> <strong> ${data.handle}: </strong> ${data.message} </p>`;
});

message.addEventListener('keypress', function() {
    socket.emit('typing', handle.value);
});

socket.on('typing', function(data) {
    feedback.innerHTML = `<p> <em> ${data} is typing a message</em> </p>`;
});
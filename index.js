// creating a simple server with node 

const http = require('http');

http.createServer(function(req, res) {
    res.writeHeader(200);
    res.write("Hello world");
    res.end()
}).listen(7000);
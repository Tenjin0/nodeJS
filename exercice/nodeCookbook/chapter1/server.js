const http = require('http');

const server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end('Woohoo');
}).listen(8080);


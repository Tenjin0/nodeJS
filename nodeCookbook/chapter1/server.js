var http = require('http');
http.createServer(function (request, response) {
    response.writehead(200, {'Content-Type': 'text/html'});
    response.end('Woohoo!');
}).listen(8080);
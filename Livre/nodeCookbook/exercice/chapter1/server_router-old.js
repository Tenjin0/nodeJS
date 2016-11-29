const http = require('http');
const path = require('path');
const url = require('url');

const port = 8080;
const localhost = 'localhost';
// console.log(path);
const pages = [
	{id: 1, route: '', output: 'Woohoo!'},
	{id: 2, route: 'about', output: 'A simple routing with Node example'},
	{id: 3, route: 'dashboard', output: function () { return 'Here\'s ' + this.route; }}
];
var server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    console.warn(request.url, decodeURI(request.url));
    const urlRequest = url.parse(decodeURI(request.url), true);
    console.log(urlRequest);
    var id = urlRequest.query.id;
    // console.warn(url);
    var lookup = path.basename(urlRequest.pathname);
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].route === lookup) {
            if (typeof pages[i].output === 'function') {
                response.end(pages[i].output());
            } else {
                response.end(pages[i].output);
            }
            break;
        }
    }
    if (!response.finished) {
        response.writeHead(404);
        response.end('page not found');
    }
    // console.log('url',1 url);
    // console.log('basename', path.basename(url));
}).listen(port, 'localhost', function () {
    console.log('listen callback', `${localhost}:${port}`);
});
server.on('listening', () => {
	// event call after listen callback
	// console.log('listening callback');
});

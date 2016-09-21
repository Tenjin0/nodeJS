const http = require ('http');
const path = require('path');
// console.log(path);
var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    const url = decodeURI(request.url);
    var loolup = path.basename(url);
    console.warn(pages);
    
    // console.log('url', url);
    // console.log('basename', path.basename(url));
    response.end('Hello');
}).listen(8080);

const pages = [
    {route: '', output: 'Woohoo!'},
    {route: 'about', output: 'A simple routing with Node example'},
    {route: 'dashboard', output: function () { return 'Here\'s'} + this.route}
];
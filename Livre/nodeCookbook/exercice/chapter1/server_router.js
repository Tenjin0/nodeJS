const http = require('http');
const url = require('url');
const path = require('path');

const port = 8080;
const localhost = "localhost";

var pages = [
    {route: '', output: 'Woohoo!'},
    {route: 'about', output: 'Multilevel routing with Node'},
    {route: 'another page', output: function () {return 'Here\'s '
        + this.route; }}
];

const server = http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    const urlRequest = url.parse(request.url, true);    
    var lookup = path.basename(decodeURI(urlRequest.pathname));
    for (var i = 0; i < pages.length; i++) {
        var element = pages[i];
        // console.log(element.route, lookup);
        if (lookup === element.route) {
            response.end(typeof element.output === "function" ? element.output() : element.output)
            break;
        }
    }
    if(!response.finished) {
        response.writeHead(404);
        response.end("Page not found");
    }
//
}).listen(port, localhost, () => {
    console.log(`listen callback, ${localhost}:${port}`)
});
server.on("listening", () => {

});
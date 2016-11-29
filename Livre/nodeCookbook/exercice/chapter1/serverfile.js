const http = require('http');
const path = require('path');

var fs = require('fs');

const mimeTypes = {
    ".js" : 'text/javascript',
    ".html": "text/html",
    ".css": 'text/css'
};

var cache = {};
var  cacheAndDeliver = function (f, callback) {
    fs.stat(f, function(err , stats) {
        if(err) {
            err.mcode = 400;
            return (err, null);
        }
        console.log(Date.parse(stats.ctime),  (cache[f]) ? cache[f].timestamp : "");
        
        if (!cache[f] ||  Date.parse(stats.ctime) >= cache[f].timestamp) {
            fs.readFile(f, function (err, data) {
                if (!err) {
                    cache[f] = { content: data, timestamp : Date.now() };
                } else {
                    err.mcode = 500;

                }
                callback(err, data);
            });
            return;
        }
        console.log('Loading from cache', f);
        callback(null, cache[f].content);
    });
};

const server = http.createServer(function (request, response) {
    var lookup = path.basename(decodeURI(request.url)) || "index.html";
    var f = path.join("src", lookup);
    cacheAndDeliver(f, function(err, data){
        if (err) {
            response.writeHead(err.mcode);
            switch (err.code) {
            case 400:
                response.end("Not found");
                break;
            case 500:
                response.end("Server Error");
                break;
            default:
                break;
            }
            return;
        }
        var headers = {'Content-Type': mimeTypes[path.extname(f)]};
        response.writeHead(200, headers);
        response.end(data);
    });
            // response.writeHead(404);
            // response.end();
}).listen(8000, function() {
    console.log("Listening on localhost:8000");
});
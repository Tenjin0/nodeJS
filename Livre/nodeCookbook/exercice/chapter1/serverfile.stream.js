const http = require('http');
const path = require('path');
const url = require("url");
var fs = require('fs');

const mimeTypes = {
    ".js" : 'text/javascript',
    ".html": "text/html",
    ".css": 'text/css'
};

var cache = {
    store: {},
    maxSize : 1024 * 25,
    maxAge : 60 * 60 * 1000,
    clean: function(now) {
        // console.log(this.store);
        if (now - this.cleanAfter > this.cleanedAt) {
            this.cleanAt = now;
            Object.keys(this.store).forEach(function (file)  {
                if (this.store[file] !== undefined && this.store[file].timestamp + this.maxAge > now) {
                    delete this.store[file];
                }
            }.bind(this));
        }
    },
    cleanAfter: 2 * 60 * 60 * 1000,
    cleanedAt: 0
};


const server = http.createServer(function (request, response) {
    var lookup = url.parse(decodeURI(request.url), true);
    var lookup = lookup.pathname;
    lookup = (lookup === "/") ? '/index.html' : lookup;
    // var lookup = path.basename(decodeURI(request.url)) || "src/index.html";
    console.warn(lookup);
    var f = path.join("src", lookup);
    // var f = lookup;
    fs.stat(f, function(err , stats) {
        if(err) {
            response.writeHead(400);
            response.end("Not found");
            return;
        }
        if (!cache.store[f] ||  Date.parse(stats.ctime) >= cache.store[f].timestamp) {
            var bufferOffset = -1;
            if (stats.size < cache.maxSize) {
                bufferOffset = 0;
                cache.store[f] = { content: new Buffer(stats.size), timestamp: Date.now()};
            }
            var s = fs.createReadStream(f, { bufferSize: 1})
            .once("open", function() {
                var header = {'Content-Type': mimeTypes[path.extname(f)]};
                response.writeHead(200, header);
                this.pipe(response);
            })
            .once("error", function (e) {
                response.writeHead(500);
                response.end("Server Error")
            })
            .on("data", function(chunk) {
                if ( bufferOffset >= 0) {
                    chunk.copy(cache.store[f].content, bufferOffset);
                    bufferOffset += chunk.length;
                }
            }).on("end", function() {
                console.log("end");
            });
        } else {
            console.log('Loading from cache', f);
            var header = {'Content-Type': mimeTypes[path.extname(f)]};
            response.writeHead(200, header);
            response.end(cache.store[f].content);
        }
    });
            // response.writeHead(404);
            // response.end();
    cache.clean(Date.now());
}).listen(8000, function() {
    console.log("Listening on localhost:8000");
});
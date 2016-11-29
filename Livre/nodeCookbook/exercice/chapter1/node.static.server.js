const staticFile = require("node-static");
const http = require("http");
var fileServer = new staticFile.Server("./src");

var server = http.createServer((req, res) => {
    req.addListener("end", function() {
        console.warn("end");
        fileServer.serve(req, res);
    }).resume();
}).listen(8000);
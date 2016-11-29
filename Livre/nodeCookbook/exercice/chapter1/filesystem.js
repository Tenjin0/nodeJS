const fs = require("fs");
const path = require("path");
var f = "src/index.html";

fs.stat(f,  function (err, stats) {
    console.warn(stats);

});
var s = fs.createReadStream(f).once("open", function () {
    console.log("stream open");
}).once("error", function(e) {
    console.log(e);
}).on("data", function(data) {
    console.log(data);
});
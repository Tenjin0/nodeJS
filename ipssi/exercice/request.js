const request = require('request');
const fs = require("fs");
request
    .get('http://jsonplaceholder.typicode.com/posts/1')
    .on('error', (err) => {
        console.log(err);
    })
    .on('response', function(response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) // 'image/png'
    })
    .pipe(fs.createWriteStream("weather.json"));
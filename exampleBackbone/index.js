var app = require('express')(),
    server = require('http').createServer(app),
    fs = require('fs'),
    backbone = require('backbone'),
    undescore = require('underscore'),
    io = require('socket.io').listen(server);


//var io = require('socket.io').listen(server);
// var ent = require('ent'); // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/backbone.js', function (req, res) {
	res.sendFile(__dirname + '/backbone.js');
});

app.get('/underscore.js', function (req, res) {
	res.sendFile(__dirname + '/underscore.js');
});

server.listen(8080);
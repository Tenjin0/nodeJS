var app = require('express')(),
    server = require('http').createServer(app),
    ent = require('ent'), // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)
    fs = require('fs');



var io = require('socket.io').listen(server);
// var ent = require('ent'); // Permet de bloquer les caractères HTML (sécurité équivalente à htmlentities en PHP)

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

io.sockets.on('connection', function (socket) {

	socket.emit('news', { hello: 'world' });

	socket.on('disconnect', function() {
    	socket.broadcast.emit('message', socket.pseudo + ' vient de se deconnecter.');

   	});
	socket.on('nouveauPseudo', function (pseudo) {
   		socket.pseudo = pseudo;
   		console.log(socket.pseudo, 'vient de se connecter');
   		socket.broadcast.emit('nouveauPseudo',socket.pseudo);
   		socket.emit('pseudo', socket.pseudo);
  });
	socket.on('message', function (message){
		console.log(socket.pseudo + ' ' + message);
		socket.broadcast.emit('message',socket.pseudo + ': ' + message);
		socket.emit('message',socket.pseudo + ': ' + message);
	});
});

server.listen(8081);

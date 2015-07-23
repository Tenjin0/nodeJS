# sapp = require 'express'
express = require 'express'
app = express.createServer()
# http = require 'http'
# server = http.createServer app
# io = require('socket.io').listent(server)

io  = require 'socket.io'
io.listen server

app.get '/', (req,res) ->
	res.sendFile __dirname + '/views/index.html'

io.sockets.on 'connection', (socket) ->

	socket.emit 'news', hello :'world'

	socket.on 'disconnect', ->
		socket.broadcast.emit 'message', socket.pseudo + 'vient de se deconnecter'

	socket.on 'nouveauPseudo', ->
		socket.pseudo = pseudo
		console.log socket.pseudo, "vient de se connecter"
		socket.broadcast.emit 'nouveauPseudo',socket.pseudo
		socket.emit 'pseudo', socket.pseudo

	socket.on 'message', ->
		concole.log soket.pseudo + ' ' + message
		socket.broadcast.emit 'message',socket.pseudo + ': ' + message
		socket.emit 'message', socket.pseudo + ': ' + message

server.listen 8081

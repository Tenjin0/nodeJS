
var port = 3000;
var regex = new RegExp("^/.*$");
var guestNumber = 1;
var namesUsed = []; // tableau des noms d'utilisateurs quelque soit la room
var nickNames = {};
var defaultGuestName = 'Guest';

var currentRoom = {};


/**
 * The chat application needs to handle the following types of scenarios and events:
 Guest name assignment
 Room-change requests
 Name-change requests
 Sending chat messages
 Room creation
 User disconnection
 * @type {[type]}
 */

exports.listen = function(server) {
	var io = require("socket.io").listen(server);

	io.sockets.on('connection',function( socket){
		//guestNumber = guestNumber +1;
		// console.log(guestNumber);
		// guestName = defaultGuestName;
		//socket.broadcast.emit('message',{text : 'Bienvenue sur le chat'});
		guestNumber = assignGuestName(socket,guestNumber, nickNames, namesUsed);
		joinRoom(socket,'lobby');
	/*	socket.emit('message',{ 
			text : 'Bienvenue sur le chat',
		});*/
		// socket.broadcast.to('lobby').emit('message',{text : 'Bienvenue sur le chat'});

		handleMessageBroadcasting(socket, nickNames);
		handleNameChangeAttempts(socket, nickNames, namesUsed);
		handleRoomJoining(socket);
		// socket.on('rooms', function() {
		// 	socket.emit('rooms', io.sockets.manager.rooms);
		// });
		handleClientDisconnection(socket, nickNames, namesUsed);
		// console.log(currentRoom);
		//console.log(nickNames);
		// console.log('Nouveau utilisateur ' + guestName + '\n');
	});

	function assignGuestName(socket, guestNumber, nickNames, namesUsed){

		var name = defaultGuestName + guestNumber;
		//console.log(name);
		var nameAlreadyExist = false;
		for (var i = namesUsed.length - 1; i >= 0; i--) {

			if(namesUsed[i] == name){
				// console.log('detect same name',namesUsed[i],name)
				nameAlreadyExist = true;
				break;
			}
		}
		if(nameAlreadyExist){
			console.log('Name already Exists ' + nameAlreadyExist);
			socket.emit('resultName',{
				success : false,
				name : name
			});
		}else{
			namesUsed.push(name);
		}
		nickNames[socket.id] = name;
		socket.emit('resultName',{
				sucess : true,
				name : name
			}
		);
		return ++guestNumber;
	}
	//
	function joinRoom(socket,room){
		socket.join(room);// 
		currentRoom[socket.id] = room;

		socket.emit('resultjoin',{room : room}); // emit to the current browser that he has join a room
		socket.broadcast.to(room).emit('message',{ 
			text : nickNames[socket.id] + ' has join ' + currentRoom[socket.id],
		});
		var socketsInRoom = io.sockets.adapter.rooms[room]; // connaitre toutes les sockets qui sont liées a cette room

		//console.log('socketsInRoom', Object.keys(socketsInRoom)); 
		//Object.keys(usersInRoom) renvoie le tableau de clés
		var usersInRoom = [];
		if (Object.keys(socketsInRoom).length > 0){
			
			for( var id in socketsInRoom){
				if (nickNames[id]){
					usersInRoom.push(nickNames[id]);
				} 
			}
			socket.emit('listUsers',{listUsers : usersInRoom});
			console.log('usersInRoom -> \n',usersInRoom);
		}
		// if (usersInRoom)
	}
	
	function handleMessageBroadcasting(socket, nickNames){
		
		socket.on('message',function(message){
			console.log('message received ', message,'from room', currentRoom[socket.id]);
			socket.emit('message',{text : nickNames[socket.id] + " : " + message.text});
			socket.broadcast.to(message.room).emit('message',{text : nickNames[socket.id] + " : " + message.text});
		});

	}

	function handleNameChangeAttempts(socket, nickNames, namesUsed){
		socket.on('nameAttempt',function(name){

			//interdit le renommage d'un nom commencant par Guest
			if(name.indexOf('Guest') === 0){
				socket.emit('nameResult', {
					success : false,
					message: 'Names cannot begin with "Guest".'
				});
			} else {
				// Si le nom n'est pas utilisé
				if(nameUsed.indexOf(name) == -1){
					var previousName = nickNames[socket.id];
					nameUsed.splice(nameUsed.indexOf(preivousName),1);
					nameUsed.push(name);
					//console.log(nameUsed);
					// on envoie a la socket le pseudo
					socket.emit('resultName',{
					success : true,
					name : name
					});
					// on envoie a toutes les sockets de la room le message de changement de nom
					socket.broadcast.to(currentRoom[socket.id]).emit('message',
						{ text : previousName + ' is now known as ' + name + '.'}
					);
				}
				
				// le nom est deja pris 
				else{
					socket.emit('resultName',{
						success: false,
						message  : 'That name is already in use.'
					});
				}
			}
		});
	}

	function handleRoomJoining(socket) {
		socket.on('join', function(room) {
			socket.leave(currentRoom[socket.id]);
			joinRoom(socket, room.newRoom);
		});
		}

	function handleClientDisconnection(socket, nickNames, namesUsed){
		//console.log('nickNames -> \n',namesUsed);
		//console.log('nickNames before deleting -> \n ',nickNames);
		socket.on('disconnect',function(){
		namesUsed.splice(namesUsed.indexOf(nickNames[socket.id]),1);
		delete nickNames[socket.id];
		//console.log('nickNames after deleting-> \n ',nickNames);

		}); 
	}
};
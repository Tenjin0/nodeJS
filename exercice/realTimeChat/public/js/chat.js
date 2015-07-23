$( document ).ready(function() {
    
    (function($){
	//alert('toto');
		var socket = io.connect('http://localhost:3000');

		//$("#message").text('');
		
		socket.on('connect',function(){
			// console.log('connect the websocket to the server');
			$("#message").text('');
		});
		socket.on('resultName',function(user){
			// console.log(user);
			//$('#room-list').append('<li>'+ user.name+ '</li>');
			

		});
		socket.on('resultjoin',function(room){
			// console.log('result join the room\n',room.room);
			$('#messages').append('<p>you joined the room ' + room.room + '</p>');
		});

		socket.on('message',function(message){ // broadcast to all room
			// console.log('message received from server :\n',message);
			// $('#messages').append('<p>' + message.text + '</p>');
			$('#messages').append($('<p></p>').text(message.text));

		});

		socket.on('listUsers',function(tab){ // broadcast to all room
			// console.log('tab.listUsers\n',tab.listUsers);
			var list = "";
			for (var i = 0; i <tab.listUsers.length ; i++) {
				// console.log('listUsers\n',tab.listUsers[i]);
				list += '<li>'+ tab.listUsers[i] + '</li>';

			}
			// console.log('tab.list\n',list);
			$('#room-list ul').html(list);	
		});

		socket.on('join',function(room){

			console.log(room);
		});

		socket.on('disconnect',function(){
			// console.log('disconnect from server');
			$('#messages').append($('<p></p>').text('Disconnect from the server'));
		});

		$("#messageForm").submit(function(event){
			console.log('event ', event);
			var message = $('#send-message').val();
			processUserInput(message);
		
			console.log('message', message);
			$('#send-message').val('');
			socket.emit('message',{
				room : 'lobby',
				text : message});
			//console.log('message ', message);
			event.preventDefault();
		});


		// var Chat = function(socket){
		// 	this.socket = socket;
		// };

		// Chat.prototype.sendMessage = function(){

		// 	this.socket.emit('message',{message : text});
		// };
	})(jQuery);	
});

 
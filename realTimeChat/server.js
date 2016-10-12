var http=require('http');
var fs = require('fs');
var path=require('path');
var mime=require('mime');
var util = require('util');
var mimelookup = {
	'.css' : 'text/css; charset=UTF-8',
	'.js' : 'application/javascript',
	'.html' : 'text/html; charset=utf-8',
	'.map' :'text/css; charset=UTF-8'
};


var cache={};

function send404(response, message){

	if(!message){
		message = 'Error 404: resource not found.';
	} else {
		message = 'Error 404: ' + message;
	}
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write(message);
	response.end();
}


function sendFile(response,filePath,fileContent){
	response.writeHead(200,{'Content-Type': mimelookup[path.extname(absPath)]});
	response.end(fileContent);
}

/**
 *  The function determines whether or not a file is cached and,
	if so, serves it. If a file isn’t cached, it’s read from disk and served. If the file doesn’t
	exist, an HTTP 404 error is returned as a response.
 */


function serverStatic(response, cache, absPath){
	cache={};
	// 
	console.log('absPath ext',path.extname(absPath),mimelookup[path.extname(absPath)] );
	if(cache[absPath]){
		// response.setContent(mimelookup[path.extname(absPath)]);
		response.writeHead(200,{'Content-Type': mimelookup[path.extname(absPath)]});
		response.end(cache[absPath]);
	} else {
		// absPath = path.join(__dirname,absPath);
		// if('bower_components/bootstrap/dist/css/bootstrap.css' != absPath){
			// console.log('ne sont pas egaux \n');
			// console.log('1 : bower_components/bootstrap/dist/css/bootstrap.css \n');
			// console.log('2 :',absPath + '\n');


		// }
		fs.readFile(absPath, function(err,data){
			if(err){
				console.log('err : '+ err);
				send404(response,absPath);
			}else{
				cache[absPath] = data;
				response.writeHead(200,{'Content-Type': mimelookup[path.extname(absPath)]});
				response.end(cache[absPath]);
			}
		});
	}
}


var server = http.createServer(function(request, response) {
	var filePath = 'public';
	console.log('req url :', request.url);
	regex = new RegExp("^/?([^?]*)[?]?(.*)?$");
	// regex = new RegExp("^(.*)$");
		
	if (request.url == '/' || request.url == 'index.html') {
	filePath += '/index.html';
	} else if(request.url.indexOf('bower_components') != 1){
		filePath += request.url;
	}else{
		filePath = request.url;
	}
	//console.log('request bower ?',request.url.indexOf('bower_components'));
	var match = filePath.match(regex);
	// console.log('match',match );
	if (request.url.indexOf('bower_components') == 1){
		// console.log('je passe par ici');
		filePath = match[1];
	}else if(match){
		// console.log(match[1].indexOf('public'));
		if( match[1].indexOf('public') != 1 && match[1].indexOf('public') != 0 ){
			filePath += match[1];
		} else {
			filePath = match[1];
		}
	}
	// console.log('filepath',filePath);

	//console.log(util.inspect(process.env, {showHidden: false, depth: null}));
	

	//console.log('current path :' +  process.cwd());
	// console.log('filepath :' , filePath ,'\n');
	serverStatic(response, cache, filePath);
	});


server.listen(3000, function() {
console.log("Server listening on port 3000.");
});

var chatServer = require('./lib/chat_serverWHCoffee');
chatServer.listen(server);

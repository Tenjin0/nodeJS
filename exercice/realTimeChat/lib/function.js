function send404(response, message){

	if(!message){
		message = 'Error 404: resource not found.';
	} else {
		message = 'Error 404: ' + message;
	}
	response.writeHead(404,{'Content-Type':'text/plain'});
	response.write(message);
	response.end()
}


function sendFile(response,filePath,fileContent){
	response.writeHead(200,{'Content-Type': mime.lookup(filePath)});
	response.end(fileContent);
}

/**
 *  The function determines whether or not a file is cached and,
	if so, serves it. If a file isn’t cached, it’s read from disk and served. If the file doesn’t
	exist, an HTTP 404 error is returned as a response.
 */


function serverStatic(response,absPath){
	cache={};
	if(cache[absPath]){
		response.writeHead(200);
		response.end(cache[absPath]);
	} else {
		console.log('abspath '+ absPath);
		fs.readFile(absPath, function(err,data){
			if(err){
				send404(response,absPath);
			}else{
				cache[absPath] = data;
				response.writeHead(200);
				response.end(cache[absPath]);
			}
		});
	}
}
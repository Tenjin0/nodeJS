var http = require('http');
var fs = require('fs');
var path = require('path');
var regex = new RegExp('^/([a-z/.]*)[\\?]?(.*)*$');
var mimelookup = {
	'.js' : 'application/javascript',
	'.html' : 'text/html'
};
var server = http.createServer(function(req,res){
	var url = path.normalize(req.url);
	if(url == '/'){
		url = '/index.html';
	}


	// console.slog(url);
	var matches;
	if(req.method == 'GET' && (matches = url.match(regex))){
		// console.log('basename',path.basename(url));
		// console.log('matches', matches);
		var rs = fs.createReadStream(matches[1]);
		rs.on('open',function(){
			// console.log(matches[1],'found');
			ext = path.extname(matches[1]);
			if (!mimelookup[ext]) {
				send404(res);
				return;
			}
			console.log('ext',ext);
			res.writeHead(200,{'Content-Type': mimelookup[ext]});
			rs.pipe(res);
		});
		rs.on('error',function(err){
			send404(res);
		});
		// res.end(); // comme nous somme dans un flux si on end on termine la connection avant que que le flux est commence asynchrone !!!!
	}else {
		send404();

	}

}).listen(3000);

function send404(response){
	response.writeHead(404,{ 'Content-Type': 'text/html' });
	response.end('Error 404: Resource not found.');
}
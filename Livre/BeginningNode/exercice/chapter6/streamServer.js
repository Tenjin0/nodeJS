var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
	
	var filePath = '../image/Avatar.jpg';
	fs.open(filePath,'r',function(err, fd){
		if (err){
			res.writeHead(404);
			res.end('not Found');
		} else {
			res.writeHead(200);
			fs.createReadStream(null,{fd : fd}).pipe(res);
			//s.pipe(process.stdout);

		}
	});
}).listen(4000, function(){
		console.log('Listening on : localhost: 4000');
	});
var http = require('http');
// test with curl http://localhost:3000 -i (-i or print response header);
var server = http.createServer(function(req,res){
	console.log('headers',req.headers);
	res.writeHead(200);
	res.write('hello\n');
	res.end('bye\n');
}).listen(3000);
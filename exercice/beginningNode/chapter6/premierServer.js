(function(){
	var http = require('http');
	var qs = require('querystring');
	var url = require('url') ;
var server = http.createServer(function(req, res){
	req.on('readable',function(){
		console.log('req -> ',req.read());

	});
	// req.on('data', function(chunk){console.log('chunk',chunk) });
	var queryObject = url.parse(req.url,true).query;
  	console.log(queryObject);

	res.writeHead(200,{'Content-Type' : 'text/plain; charset=utf-8' });
	res.end('premier Server');
}).listen(3000, function(){
	console.log('Listen http://localhost:3000');
});
})();

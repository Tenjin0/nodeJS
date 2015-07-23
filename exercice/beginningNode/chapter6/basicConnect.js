var connect = require('connect'),
http = require('http');
var util = require('util');
var app = connect();

function logit(req, res,next) {
	// util.log(util.inspect( req.headers));
	next();
}

function echo(req, res,next) {
	// next();

}

function parseJSON(req, res, next){
	// util.log(util.format('Request header: %s',req.headers));

	if(req.headers['content-type'] == 'application/json'){
		console.log('header ',req.headers['content-type']);

		// req.on('readable',function(){
		// 	readData += req.read();
		// });
		var readData = '';
		req.on('readable', function () {
			// console.log('req read',req.read().toString());
			readData += req.read();
		});
		req.on('end',function(){
			try{
				req.body = JSON.parse(readData);
				console.log('end',req.body);
			}catch(e){
				console.log(e);
			}
			next();
		});
	}else{
		next();
	}

}

function end(req,res){
	if(req.body){
		var body = req.body.foo + "";
		res.end(body);
	}else{
		res.end('done');
	}
}
function authentication(req,res,next){
	function send401(){
		res.writeHead(401,{'WWW-Authenticate': 'Basic'});
		res.end();
	}

	var authHeader = req.headers.authorization;

	if (!authHeader) {
		send401();
		return;
	}
	console.log('authHeader',authHeader);
	var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
	var user = auth[0];
	var pass = auth[1];

	if (user == 'admin' && pass == 'admin') {
		next(); // all good
	}
	else {
		send401();
	}
		next();
	}

 
connect()
// .use(logit)
// .use('/echo', echo)
.use('/admin',authentication)
.use('/admin',function(req,res,next){
	res.end('welcome admin');
})
.use(parseJSON)
.use(end)
.listen(3000);

console.log('server : localhost:3000');

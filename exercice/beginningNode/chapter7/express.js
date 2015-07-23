var express = require('express');
// var http  = require('http');
var servestatic = require('serve-static');
var serveIndex = require('serve-index');
// var cookieParser = require('cookie-parser');
// var bodyparser = require('body-parser');
var fs = require('fs');
var util= require('util');

function logit(req, res, next){
	// console.log(req.headers);
	util.log(util.inspect( req.headers));
	next();
}

function pipe(req, res, next){

	var rs = fs.createReadStream();
	var r =(req.url).pipe(res);

	r.on('end',function(){
		console.log('this is the end of the stream');
		next();
	});
}
var app = express()
// .use(logit)
.use(pipe)
.use(servestatic(__dirname + '/public',{'index': ['default.html','default.htm']}))
.use(serveIndex(__dirname + '/public'))
.use(function(req,res){
	res.end('done express');
}).listen(3000);
// Having the ability to be registered as a listener with HTTP allows you to use HTTPS if you want to (the same as Connect). Similar to Connect, Express provides a utility listen function to register itself with http.
//http.createServer(app).listen(3000);

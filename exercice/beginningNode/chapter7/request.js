var express = require('express');
// http://localhost:3000/users?desc=home

var app = express()
.use(function(req,res){
	// res.status(200);
	//
	console.log('Content-Type',req.get('Content-Type')) ;
	console.log('req path',req.path);
	console.log('req query ',req.query);
	console.log('req url ',req.url);
	res.set('Content-Type','text/plain');
	res.type('html');
	// res.send(200,'everything is ok\n'); deprecated
	res.status(200).send('everything is ok\n'); // only one send ???
	res.end('done\n');
})
.listen(3000);
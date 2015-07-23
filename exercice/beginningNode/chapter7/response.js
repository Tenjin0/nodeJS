var express = require('express');


var app = express()
.use(function(req,res){
	// res.status(200);
	//

	res.set('Content-Type','text/plain');
	res.type('html');
	// res.send(200,'everything is ok\n'); deprecated
	res.status(200).send('everything is ok\n'); // only one send ???
	res.end('done\n');
})
.listen(3000);
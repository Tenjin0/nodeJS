var express = require('express');
var cookieParser = require('cookie-parser');


var app = express()
.use(cookieParser())
.use('/toggle', function (req, res, next){
	if (req.cookies.name){
		res.clearCookie('name');
		res.write('name cookie cleared! Was:' + req.cookies.name);

	}else {
		res.cookie('name','Tenji');
		res.write('name cookie set!');
	}
	next();
})
.use(function(req, res){

	res.end('\ndone');
})
.listen(3000); 

// var express = require('express');
// var cookieParser = require('cookie-parser');

// var app = express()
//     .use(cookieParser())
//     .use('/toggle', function (req, res) {
//         if (req.cookies.name) {
//             res.clearCookie('name');
//             res.end('name cookie cleared! Was:' + req.cookies.name);
//         }
//         else {
//             res.cookie('name', 'foo');
//             res.end('name cookie set!');
//         }
//     })
//     .listen(3000);

var express = require('express');
var cookieParser = require('cookie-parser');
var secret = 'secret';

var app = express()
.use(cookieParser(secret))
.use('/toggle',  function (req,res,next){
	if(req.signedCookies.name){
		res.clearCookie('name');
		res.write('name signedCookie cleared! Was:' + req.signedCookies.name);
	} else {
		res.cookie('name','Tenji',{signed : true});
		res.write('name cookie set!');
	}
	next();
})
.use(function(req,res){
	res.end('\ndone');
})
.listen(3000);
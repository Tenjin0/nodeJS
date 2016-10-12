var express = require('express');
var cookieSession = require('cookie-session');

var app  = express()
.use(cookieSession({ keys :['secret']}))
// .use('/home',function(req, res , next){
// 	var str;
// 	if(req.session.view = undefined){
// 		str = '/home\n inc session view :';
// 		req.session.view++;
// 		// res.write(, req.session.view);
// 	} else {
// 		req.session.view = 1;
// 		str = '/home\n init session view :';
// 	}
// 	res.write(str + ' ' + req.session.view  + ' \n');
// 	console.log('session view ',req.session,  req.session.view);
// 	// res.end('Total views for you: ' + req.session.views);
// 	next();

// })
.use('/home', function (req, res, next) {
	console.log('req.sesion.view', req.session.view);
	var n = req.session.view || 0;
	req.session.view = ++n;
	res.write(n + ' views');
	next();
})
.use('/reset',function (req, res , next){
	delete req.session.view;
	// req.session.view = null;
	console.log('session view', req.session.view);
	res.write('session view deleted' +  '\n');
	next();
})
.use(function(req,res){
	res.end(' done\n');
})
.listen(3000);
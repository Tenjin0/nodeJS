(function(){
	var fs=require('fs');
	var mime= require('mime');
	var path =require('path');

	console.log(mime.lookup('./index.html'));

	abspath = '/public/index.html';
	console.log('abspath depart '+ abspath);

	regex = new RegExp("^/.*$");

	var match = abspath.match(regex);
	if(match){
		res = abspath.substring(1,abspath.length);
	}
	console.log('abspath apres '+ res);

	// if 
	console.log('substring: ' + res); 
	console.log("Path.basename " + path.basename(abspath));
	console.log("Path.dirname " + path.basename(abspath));
	console.log("Path.extname " + path.basename(abspath));
	console.log("Path.isAbsolute " + path.isAbsolute(abspath));
	/*fs.readFile(abspath,'utf-8', function(err,data){
		if(err) throw err;
		console.log(data);
	});*/
}).call(this);
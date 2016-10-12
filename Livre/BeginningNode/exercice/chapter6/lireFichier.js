(function(){

var fs= require('fs');

fs.readFile('../package.json','utf-8',function(err,data){

	console.log(data);
	
});

}).call(this);
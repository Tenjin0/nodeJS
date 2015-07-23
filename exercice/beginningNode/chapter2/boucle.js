for(var i=0; i<10; i++){
	console.log('i: ',i);
	(function(count){
		setTimeout(function(){
		console.log('print i :', count);
	},1000);
	})(i);
}
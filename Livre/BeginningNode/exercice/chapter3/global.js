
console.time('timer');
var count = 0;
(function(count){
	var setIntervalObject = setInterval(function(){

	console.log('count:' + count);
	if(count == 5){
		clearInterval(setIntervalObject);
	console.timeEnd('timer');	
	}
	count++;
	},1000);
})(count);
	
console.log(__dirname);
console.log(__filename);
console.log(process.argv);

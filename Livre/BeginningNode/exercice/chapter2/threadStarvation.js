console.time('timer');

var func  = function(){
	console.timeEnd('timer');	
}

setTimeout(func, 1000);
function fibonacci(n){

	if( n < 2){
		return 1;
	} else {
		return  fibonacci(n-2) + fibonacci(n-1) ;
	}
}
console.log(fibonacci(40));

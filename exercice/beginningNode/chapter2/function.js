// anonymous function

var fuu = function(message){
	console.log(message);
};

fuu('anonymous function');

// closure : inner function can acces to the outer function varialbe even when the outer has already return

function outer(message){

	function inner(){

		console.log(message);
	}
	inner();

}

outer('message');

function outer2(compteur){
	compteur ++;
	console.log('compteur ' +compteur);


}

var init = 1;
outer2(init);
console.log('variable modifié par référence ?: ' +init);

for(var i = 0 ; i< 10; i++){
	(function(currentI){
		setTimeout(function(){
		console.log('count: ' + currentI);
		},1000);
	})(i);

}

console.log(function(){} == function(){});
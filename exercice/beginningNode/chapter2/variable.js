setTimeout(function () {
console.log('2000 milliseconds have passed since this demo started');
}, 2000);
var bar = 1;
var bas = 2;
console.log(bar + bas);
setTimeout(function () {
console.log('1000 milliseconds have passed since this demo started');
}, 1000);

var objet = {
	titre : 'titre',
	contenu : 'hello',
	comp : ['java','php','nodejs']
}
console.log(objet);

var foo = 456;
if(true){

	var foo = 123;
}
console.log('foo', foo); // change the variable foo

// using scope of the function
var foo = 456;
if(true){
	(function(foo){
		var foo =123;
	})(foo);
}
console.log('foo', foo); // create a new scope variable foo doesn't change

var name = 'GuestToto';
console.log(name.indexOf('Toto'));


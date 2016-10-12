setTimeout(function () {
console.log('2000 milliseconds have passed since this demo started');
}, 2000);
var bar = 1;
var bas = 2;
console.log(bar + bas);
setTimeout(function () {
console.log('1000 milliseconds have passed since this demo started');
}, 1000);
var tab = [1,1,3,4,5,7,6];
tab.push(8); // add element at the end
tab.unshift(1); // add element at the beginning
//tab.pop();              // Removes the last element ("Mango") from fruits
//fruits.shift();          // Removes the first element "Banana" from fruits 
tab.splice(1,2); //

//fruits.reverse();  
//
tabtemp= tab.slice(0,1) ;
tabtemp2= tab.slice(1,tab.length) ;
tabtemp.push(2);
tab = tabtemp.concat(tabtemp2);
tab.sort();            // Sorts the elements of fruits
console.log(tab);

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


var inherits = require('util').inherits;

var Animal = function(name){

	this.name = name;

	Animal.prototype.walk = function(dest){

		console.log('walk to ', dest);
	};
};

function Bird(name){

	Animal.call(this,name);
	Bird.prototype.fly= function(dest){
		console.log('fly to ', dest);
	};
}
inherits(Bird,Animal);

/*Bird.prototype = Object.create(Animal.prototype); // probleme on perd le prototype.consctructor il faut le reassigner 
Object.create(Animal.prototype,{
constructor: {
value: Bird,
enumerable: false,
writable: true,
configurable: true
})*/

var animal = new Animal('bob');
animal.walk('Paris');
var bird = new Bird('sparrow');
bird.walk('sydney'); // sparrow is walking to sydney
bird.fly('melbourne'); // sparrow is flying to melbourne


function Base(message){
	this.message = message;
	Base.prototype.sendMessage= function (){
		return 'sendMessage ' + this.message;
	};
}

function Child(message,to){

	Base.call(this,message);
	this.to = to;
	Child.prototype.sendMessage = function(){

		return Base.prototype.sendMessage.call(this) + ' from ' + this.to;
	};

}
inherits(Child,Base);

function LittleChild(message,to,dest){
	Child.call(this,message);
	this.dest = dest;
	LittleChild.prototype.sendMessage = function(){

		return Child.prototype.sendMessage.call(this) + ' to ' + this.dest;
	};
}
inherits(LittleChild,Child);
var base = new Base('Hello');
var child = new Child('Hello','Bob');
var littleChild = new LittleChild('Hello','Bob','Alexis');
console.log(child.sendMessage());
console.log('LittleChild instanceof LittleChild',littleChild instanceof LittleChild);
console.log('littleChild instanceof child',littleChild instanceof Child);
console.log('littleChild instanceof Base',littleChild instanceof Base);


var Polygone = function(n){

	this.numberOfSide = n;

	Polygone.prototype.getNumberOfSide = function(){
		return this.numberOfSide;
	};

	Polygone.prototype.setNumberOfSide = function (number){

		this.numberOfSide = number;
	};

	Polygone.prototype.toString = function(){
		return 'numberOfSide ' + this.numberOfSide;
	};

	Polygone.prototype.print = function(){
		console.log(this.toString());
	};

};

// module.exports.Rectangle = function(w, l){

// 	this.length = l;
// 	this.width = w;

// 	Rectangle.prototype.constructor = Rectangle;
// 	Rectangle.prototype.numberOfSide = 4;
	
// 	Rectangle.prototype.getArea = function(){
// 		return this.length * this.width;
// 	}
// }


var Rectangle = function(w, l){
	
	this.width =  w;
	this.length = l;

	Rectangle.prototype.constructor = Rectangle;
	Rectangle.prototype.numberOfSide = 4;
	Rectangle.prototype.getArea =  function(){
		return this.length * this.width;
	};
	Rectangle.prototype.toString = function(){
		return 'modification par prototype';
	};

};

Rectangle.prototype = Object.create(Polygone.prototype);

var Square = function(l){

	this.length = l;
	this.width = l;

	Square.prototype.constructor = Square;

};
Square.prototype = Object.create(Rectangle.prototype);

module.exports = {
	Polygone : Polygone,
	Rectangle : Rectangle,
	Square : Square
};
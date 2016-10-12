// export 
var Polygone = function(n){

	this.numberSide = n;
	Polygone.prototype.getNumberSide =function (){

		return this.numberSide;

	};

	Polygone.prototype.setNumberSide = function(n){
		this.numberSide = n;
	};

	Polygone.prototype.toString = function(){

		return "numberOfSide : " + this.numberSide;
	};
};

var Rectangle = function(w, l){
	
	this.length = l;
	this.width =  w;

	Rectangle.prototype.constructor = Rectangle;
	Rectangle.prototype.numberSide = 4;
	Rectangle.prototype.getArea =  function(){
		return this.length * this.width;
	};
	Rectangle.prototype.toString = function(){
		return 'modification par prototype';
	};

};

Rectangle.prototype = Object.create(Polygone.prototype);
	
var Square = function(w){

	this.length = w;
	this.width = w;

	Square.prototype.constructor= Square;
};

Square.prototype = Object.create(Rectangle.prototype);




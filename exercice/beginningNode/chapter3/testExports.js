var foo = require('./class.js');


var rect1 = new foo.Rectangle(3,2);
var poly1 = new foo.Polygone(6);
var sqr1 = new foo.Square(6);
console.log('number of size of rect1 ' ,rect1.getNumberOfSide());
console.log('number of size of poly1 ' , poly1.getNumberOfSide());
console.log('Area of rect1 ' , rect1.getArea());
console.log('Arera of Sqr1 ' , sqr1.getArea());

console.log('toString of poly1 ' , poly1.toString());
console.log('toString of rect1 ' , rect1.toString());
console.log('toString of Sqr1 ' , sqr1.toString());
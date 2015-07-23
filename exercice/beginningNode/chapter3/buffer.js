var str = 'hello World';

var buffer = new Buffer(str,'utf8');


console.log('' + buffer.toString());
console.log('' + buffer.toString('hex'));
var hex = '68656c6c6f20576f726c64';
buffer = new Buffer(hex,'hex');
console.log(buffer);
console.log(buffer.toString()); // reprente in character the content of the buffer

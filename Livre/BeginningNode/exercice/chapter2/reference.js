var foo = {
	bas : 'bas'
}

var bar = foo;
foo.bas = 'not bas anymore';
console.log(foo);

// par copy
var foo = {
	bas : 'bas'
}
var bar = {
	bas : foo.bas
};

foo.bas = 'foo bar has not changed';
console.log(bar);
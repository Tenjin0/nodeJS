const foo = [2, 5];
foo.bar = 3;
foo[1] = 1;
console.warn('foo', foo);

function toto () {
	console.warn(bar);
	if (true) {
		var bar;
	}
}
toto();

function processData (inputString) {
    process.stdout.write(inputString);
}
// process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdout.write('Hello, World\n');
process.stdout.write('To end this program : press CTRL + D\n');
var _input = '';
process.stdin.on('data', function (input) {
    processData(_input);
    _input += input;
	// process.exit();
});

process.stdin.on('end', function () {
    console.warn('The end');
});
process.on('exit', function () {
    console.log('exit');
});
process.on('close', function () {
    console.log('exit');
});

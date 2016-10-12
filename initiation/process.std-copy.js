var input_std_array = [];
var input_std = '';
var input_currentline = 0;
function main(){
    var i = parseInt(readLine());
    var d = Number(readLine());
    var s = readLine();
    console.log(i);
    console.log(d);
    console.log(s);
}

process.stdout.write('toto\n');
process.stdin.setEncoding('utf8');
process.stdin.on('data', (data) => {
    input_std += data;
    process.stdin.end();
});
process.stdin.on('end', () => {
    console.log('end');
});
process.stdin.on('close', () => {
    console.log('close');
    input_std_array = input_std.split('\n');
    main();
});
process.stdin.on('exit', () => {
    console.log('exit');
});
var readLine = function () {
    return input_std_array[input_currentline++];
};

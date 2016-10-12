const readline = require('readline');
// const util = require('util');
const main = () => {
    console.log('Hello World');
};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'Tenji > '
});
// console.log(util.inspect(rl));
rl.prompt();
rl.on('line', () => {
    // console.log(input);
    rl.close();
}).on('close', () => {
    main();
    process.exit(0);
});

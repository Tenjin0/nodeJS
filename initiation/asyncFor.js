console.log('Begin');
setTimeout(function () {
    console.log('Salut Adrien');
}, 1000);
console.log('End');
for (var i = 0; i < 10; i++) {
    // (function self (j) {
        setTimeout(function () {
            console.log(`i: ${this.i}`);
        }.bind({i: i}), 1000);
    // })(i)
}

// for (var i = 0; i < 10; i++) {
//     console.log(`i: ${i}`);
// }

var show  = function( message) {
    console.log(message);
};

show("hello");
var count = 0;
var refreshIntervalId = setInterval(function() {
    count++;
    if(count === 3) {
        clearInterval(refreshIntervalId);
    }
    console.log("coucou");
}, 1000);

setTimeout(function() {
    console.log("coucou");
}, 2000);
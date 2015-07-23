var regex = new RegExp('^/([a-z/.]*)[\\?]?(.*)*$');
var regex2 = new RegExp('a');

var url = '/public/index.html?param=2&param2=3';
var str = 'toto titi tata abc acb bac';

var l;
console.log(url.match(regex));
// if ((l = url.match(regex)) !== null){
// 	console.log('regex match',l);
// }
// if((l = str.match(regex2)) !== null){
// 	console.log('regex match',l);
// 	console.log('regex2', str.substr(l.index,str.length));
// }

// var s = str.split(' ');
// console.log(s);

/*var string = 'A1B1Y:A1B2Y:A1B3Y:A1B4Z:A1B5Y:A1B6Y:A1B7Y:A1B8Z:A1B9Y:A1B10Y:A1B11Y';
var reg = /A[0-9]+B[0-9]+Y:A[0-9]+B[0-9]+Y/g;
var matches = [], found;
while (found = reg.exec(string)) {
    matches.push(found[0]);
    reg.lastIndex -= found[0].split(':')[1].length;
}

console.log(matches);*/
//["A1B1Y:A1B2Y", "A1B2Y:A1B3Y", "A1B5Y:A1B6Y", "A1B6Y:A1B7Y", "A1B9Y:A1B10Y", "A1B10Y:A1B11Y"]
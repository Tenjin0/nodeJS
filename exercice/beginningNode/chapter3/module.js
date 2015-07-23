// Path
var path = require('path');
var testPath = '/foo/../foo//bar/bas.js';
var result = path.normalize(testPath);

console.log(path.join('foo','bar'));
console.log('dirname ' + path.dirname(result));
console.log('basename ' + path.basename(result));
console.log('extname ' + path.extname(result));



var fs = require('fs');
var crypto = require('crypto');
try {
	fs.unlinkSync('../TODO2');
console.log(' TODO2 successfully deleted');
}
catch (err) {
	console.log('Error:', err);
} 
var rs = fs.createReadStream('../TODO');
var ws = fs.createWriteStream('../TODO2');
//rs.pipe(process.stdout);
rs.pipe(ws);
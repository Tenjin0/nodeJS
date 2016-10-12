var express = require('express');
 
var app = express()
.listen(3000);
// app.get('/users/:userId', function (req, res, next) {
// 	res.status(200).send('userId ' + req.params.userId + ' page: ' + req.query.page);
// 	res.end('\ndone.');
// });
app.route('/users/:userId')
.get( function (req, res) {
	res.status(200).send('userId ' + req.params.userId + ' page: ' + req.query.page);
	res.end('\ndone.');
})
.post( function (req, res) {
	res.status(200).send('userId ' + req.params.userId + ' page: ' + req.query.page);
	res.end('\ndone.');
});
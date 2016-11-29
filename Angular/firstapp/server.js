const express = require('express');

const app = express();

var mysql  = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'yoda',
    database : 'ipssi'
});
 

app.get("/users", (req, res) => {

    connection.connect();
    connection.query('SELECT * from user', function(err, rows, fields) {
        if (!err)
            console.log('The solution is: ', rows);
        else
        console.log('Error while performing Query.');
    });
    connection.end();

    res.status(200).end();
});
app.listen(8080);

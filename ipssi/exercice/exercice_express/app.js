const express = require('express');
var session = require('express-session');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const users = require("./routes/users");
const index = require("./routes/index");
const form = require("./routes/form");
const methodOverride = require('method-override');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/basics', function(err) {
    if (err) { throw err; }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// app.use(bodyParser.urlencoded({ extended: true }));
console.warn(app.get('env'));
app.use((req, res, next) => {
    if (req.url !== "/favicon.ico") {
        console.log(req.method, req.url);
        console.log('query',req.query);
        console.log('body',req.body);
    }
    next();
});

// app.use(bodyParser.urlencoded())
// app.use(methodOverride(function (req, res) {
//     if (req.body && typeof req.body === 'object' && '_method' in req.body) {
//     // look in urlencoded POST bodies and delete it
//         var method = req.body._method;
//         delete req.body._method;
//         return method;
//     }
// }));

app.use(methodOverride("_method"));
app.use(session({secret: 'ssshhhhh', cookie: { maxAge: 60000 }}));
app.use(function (req, res, next) {
    req.models = {};
    ['user'].forEach(model => {
        req.models[model] = require ("./model/" + model);
    });
    next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.listen(3000,function(){
    console.log('Hello');
});


app.get("/setname", function(req, res) {
    req.session.fullname = "Nic Raboy";
    res.send().end();
});

app.get("/getname", function(req, res) {
    const sess = req.session;
    if (sess.views) {
        sess.views++;
    } else {
        sess.views = 1;
    }

    res.render('getname', {views: sess.views, maxAge: sess.cookie.maxAge/1000, fullname: sess.fullname });
});

app.get("/destroyname", function(req, res) {
    req.session.destroy(function(err) {
        res.send("session destroy").end();
    });
});
app.get("/test-jade", function(req, res) {
    res.render("test-jade", {itsABoolean: true});
});

app.get("/test-jade2", function(req, res) {
    res.render("test-jade2", {paramHTML: "coucou <strong>TOI</strong>"});
});
app.use('/:resource(users)', users);
app.use('/:resource(form)', form);

app.get("/number/:id", function(req, res) {
    res.send("the number is " + req.params.id);
});

app.use('/', index);

// Generated by CoffeeScript 1.8.0
(function() {
  var app, express, handlebars, hbs;

  express = require('express');

  hbs = require('hbs');

  handlebars = require('handlebars');

  app = express();

  app.set('view engine', 'html');

  app.engine('html', hbs.__express);

  app.get('/todo', function(req, res) {
    return res.render('index');
  });

  app.use("/javascripts", express["static"](__dirname + "/javascripts"));

  app.use(function(req, res, next) {
    res.redirect('/todo');
    return next();
  }).listen(8080);

}).call(this);

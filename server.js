"use strict";

require('node-jsx').install();

var express = require('express'),
    exphbs = require('express-handlebars'),
    React = require('react'),    
    /*laptops = require('./routes/laptops'),
    phones = require('./routes/phones'),
    branch = require('./routes/branch'),*/
    routes = require('./src-es5/routes/index'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    api = require('./src/api/index'),
    app = express();

app.set('port', process.env.PORT || 5000);

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(logger(app.get("env") === "production" ? "combined" : "dev"));

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// CORS
// This allows client applications from other domains use the API Server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Set /www as our static content dir
app.use("/", express.static(__dirname + "/www/"));

app.use('/api', api);

// Index Route
app.use('/', routes);
/*app.get('/laptops/:id', laptops.view);
app.get('/laptops/search/:key', laptops.search);
app.get('/laptops/edit/:id', laptops.edit);
app.get('/phones', phones.index);
app.get('/branch', branch.index);
app.get('/audit', routes.audit);
app.get('/about', routes.about);*/

app.listen(app.get('port'), function () {
    console.log('Magic happens at port: ' + app.get('port'));
});

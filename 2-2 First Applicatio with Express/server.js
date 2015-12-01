var express = require('express');
var app = express();
var helloWorld = function(req, res, next) {
	//res.setHeader('Content-Type', 'text/plain');
	//res.end('Hello World');
	res.send('Hello World')
};

app.use('/', helloWorld);


app.listen(8080);

console.log('Server running at http://localhost:8080');

module.exports = app; // for export app: <var Server = require('./server');>
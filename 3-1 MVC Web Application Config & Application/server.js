var express = require('express');
var app = express();
var helloWorld = function(req, res, next) {
	
	res.send('Hello World')
};

app.use('/', helloWorld);


app.listen(8080);

console.log('Server running at http://localhost:8080');

module.exports = app;
//1. npm install connect --save
//2. req is object for HTTP request
//3. res is object for HTTP response
//4. next is function for next middleware
var connect = require('connect');
var app = connect();
var logger = function(req, res, next) {
	console.log(req.method, req.url);

	next();
};

var helloWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
};

app.use(logger);
app.use(helloWorld);

app.listen(8080);

console.log('Server running at http://localhost:8080');
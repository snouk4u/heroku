//1. npm install connect --save
//2. req is object for HTTP request
//3. res is object for HTTP response
//4. next is function for next middleware
var connect = require('connect');
var app = connect();

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World');
});

app.listen(8080);

console.log('Server running at http://localhost:8080');
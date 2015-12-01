module.exports = function(app) {
	var index = require('../controllers/index.controller.js');
	app.get('/', index.render);
	app.put('/', index.render);
	app.post('/', index.render);
	app.delete('/', index.render);
	app.all('/', index.render);
	app.route('/').get(index.render).post(index.render);
};
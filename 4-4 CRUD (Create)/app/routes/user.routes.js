module.exports = function(app) {
	var user = require('../controllers/user.controller.js');
	app.post('/login', user.login);
	app.post('/logout', user.logout);
	app.route('/user').post(user.create);
};
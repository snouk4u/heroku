exports.render = function(req, res) {
	res.render('index', {
		'title': 'ແບປັນ',
		username: req.user ? req.user.username : ''
	});
};
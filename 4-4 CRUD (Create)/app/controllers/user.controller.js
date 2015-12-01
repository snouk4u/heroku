var User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	var user = new User(req.body);
	user.save(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(user);
		}
	});
};

exports.login = function(req, res) {
	req.checkBody('email', 'Invalid email').notEmpty().isEmail();
	req.sanitizeBody('email').normalizeEmail();
	var errors = req.validationErrors();
	if (errors) {
		res.render('index', {
			title: 'ມີຂໍ້ຜິດພາດ: '+JSON.stringify(errors),
			isLoggedIn: false
		});
		return;
	}
	if (req.body.remember === 'remember') {
		req.session.remember = true;
		req.session.email = req.body.email;
		req.session.cookie.maxAge = 60000;
	}
	res.render('index', {
		title: 'ເຂົ້າລະບົບໂດຍ '+req.body.email,
		isLoggedIn: true
	});
};

exports.logout = function(req, res) {
	req.session = null;
	res.render('index', {
		title: 'ແລ້ວເຂົ້າມາໃຫມ່ນະ',
		isLoggedIn: false
	});
};
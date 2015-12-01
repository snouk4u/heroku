var User = require('mongoose').model('User');
var passport = require('passport');

var getErrorMessage = function(err) {
	var message = '';
	if (err.code) { 
		switch (err.code) {
			case 11000:
			case 11001:
				message = 'ຊື່ນີ້ມີໃນລະບົບແລ້ວ';
				break;
			default:
				message = 'ມີບາງຢ່າງຜິດພາດ';
		}
	} else {
		for (var errName in err.errors) {
			if (err.errors[errName].message) {
				message = err.errors[errName].message;
			}
		}
	}
	return message;
};

exports.renderLogin = function(req, res) {
	if (!req.user) {
		res.render('login', {
		title: 'ລົງຊື່ເຂົ້າລະບົບ',
		messages: req.flash('error') || req.flash('info')
	});
	} else {
		return res.redirect('/');
	}
};

exports.renderSignup = function(req, res) {
	if (!req.user) {
		res.render('signup', {
		title: 'ສະໝັກສຳມະຊິກ',
		messages: req.flash('error') || req.flash('info')
	});
	} else {
		return res.redirect('/');
	}
};


exports.signup = function(req, res, next) {
	if (!req.user) {
		var user = new User(req.body);
		user.provider = 'local';
		user.save(function(err) {
			if (err) {
			var message = getErrorMessage(err);
				req.flash('error', message);
				return res.redirect('/signup');

				}else {
		req.login(user, function(err) {
				if (err) return next(err);
				return res.redirect('/');
			});
	}		
		});

	} 
};


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

exports.list = function(req, res, next) {
	User.find({}, function(err, users) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.read = function(req, res) {
	res.json(req.user);
};

exports.update = function(req, res, next) {
	User.findOneAndUpdate({username: req.user.username}, req.body,
		function(err, user) {
			if (err) {
				return next(err);
			} else {
				res.json(user);
			}
		});
};

exports.delete = function(req, res, next) {
	req.user.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(users);
		}
	});
};

exports.userByUsername = function(req, res, next, username) {
	User.findOne({
		username: username
	}, function(err, user) {
		if (err) {
			return next(err);
		} else {
			req.user = user;
			next();
		}
	});
};

exports.logout = function(req, res) {
	req.logout();
	res.redirect('/');
};
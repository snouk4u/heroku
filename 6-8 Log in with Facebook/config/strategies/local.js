var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('mongoose').model('User');
module.exports = function() {
	passport.use(new LocalStrategy(function(username, password, done) {
		User.findOne({ username: username }, function(err, user) {
			if (err) { return done(err); }
			if (!user || !user.authenticate(password)) {
				return done(null, false, {
					message: 'ຊື່ຜູ້ໃຊ້ ຫລື ລະຫັດຜ່ານ ບໍ່ຖືກຕ້ອງ'
				});
			}
			return done(null, user);
		});
	}));
};
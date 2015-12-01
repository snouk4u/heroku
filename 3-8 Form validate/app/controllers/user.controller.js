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
	res.render('index', {
		title: 'ເຂົ້າລະບົບໂດຍ '+req.body.email,
		isLoggedIn: true
	});
};

exports.logout = function(req, res) {
	res.render('index', {
		title: 'ແລ້ວເຂົ້າມາໃຫມ່ນະ',
		isLoggedIn: false
	});
};
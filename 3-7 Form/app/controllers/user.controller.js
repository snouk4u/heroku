exports.login = function(req, res) {
	console.log(req.body);
	console.log('Email: ', + req.body.email);
	console.log('Password: ', + req.body.password);

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
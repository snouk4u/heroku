var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	fistName: String,
	lastName: String,
	username: {
		type: String,
		unique: true,
		trime: true,
		required: true
		},
	email: {
		type: String,
		index: true,
		match: /.+\@.+\.+/
	},
	role: {
		type: String,
		enum : ['Admin', 'Owner', 'User'],
	},
	password: {
		type: String,
		validate: [
		function (password) {
			return password && password.length >=6;
		},
		'ລະຫັດຜ່ານຕ້ອງຢ່າງນ້ອຍ 6ໂຕ'
		]
	}
});

mongoose.model('User', UserSchema);
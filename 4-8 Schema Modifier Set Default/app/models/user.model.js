var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	fistName: String,
	lastName: String,
	username: {
		type: String,
		unique: true,
		trime: true
		},
	email: {type: String, index: true},
	password: String,
	created: {
		type: Date,
		default: Date.now
	}
});

mongoose.model('User', UserSchema);
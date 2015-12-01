module.exports = {
	debug: true,
	mongoUri: 'mongodb://localhost/MEAN-Stack',
	sessionSecret: 'dev_secret_key',
	facebook: {
		clientID: '846061102178195',
		clientSecret: '0df9d54c9423f3fcc2ebe15fbf5fe934',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	},
	google: {
		clientID: '270714868333-tke27tjp3o1dou4o2lsdvbrno76hhe09.apps.googleusercontent.com',
		clientSecret: 'lr4PSpZTHvuT1Kf8eCiAMoU0',
		callbackURL: 'http://localhost:3000/oauth/google/callback'
	}
};
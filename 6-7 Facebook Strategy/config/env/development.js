module.exports = {
	debug: true,
	mongoUri: 'mongodb://localhost/MEAN-Stack',
	sessionSecret: 'dev_secret_key',
	facebook: {
		clientID: '846080542176251',
		clientSecret: '3ab6f46a283b1d11a732ee9f3960f2cd',
		callbackURL: 'http://localhost:3000/oauth/facebook/callback'
	}
};
module.exports = function(app) {
	app.use('/', require('../api/index/index_routes'));
    app.use('/users', require('../api/users/user_routes'));
    app.use('/signin', require ('../auth/routes'));
}
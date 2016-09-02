module.exports = function(app) {
    app.use('/users', require('../api/users/user_routes'));
}
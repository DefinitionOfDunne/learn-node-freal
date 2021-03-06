var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var config = require('../config/express_variables');
var checkToken = expressJwt({ secret: config.JWT.secrets.jwt });
var User = require('../api/users/user_model');


//decodeToken --> Receive Token w/ and Translate
exports.decodeToken = function() {
    return function(req, res, next) {
        if (req.query && req.query.hasOwnProperty('access_token')) {
            req.headers.authorization = 'Bearer ' + req.query.access_token;
        }
        checkToken(req, res, next);
    };
};

exports.getFreshUser = function() {
    return function(req, res, next) {
        User.findById(req.user._id)
            .then(function(user) {
                if (!user) {
                    res.status(401).send('Unauthorized');
                } else {
                    req.user = user;
                    next();
                }
            }, function(err) {
                next(err);
            });
    }
};

//verifyUser looks for user in DB and confirms username & password
exports.verifyUser = function() {
    return function(req, res, next) {
        var username = req.body.username;
        var password = req.body.password;
        console.log(username, password);
        console.log('asss');
        if (!username || !password) {
            res.status(400).send('You need a username and password');
            return;
        }

        User.findOne({ username: username })
            .then(function(user) {
                if (!user) {
                    res.status(401).send('No user with the given username');
                } else {

                    if (!user.authenticate(password)) {
                        res.status(401).send('Wrong password');
                    } else {
                        req.user = user;
                        next();
                    }
                }
            }, function(err) {
                next(err);
            });
    };

};

exports.signToken = function(id) {
    return jwt.sign({ _id: id },
        config.JWT.secrets.jwt
    );
};

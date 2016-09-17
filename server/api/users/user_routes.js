var express = require('express');
var router = express.Router();
var User = require('./user_model');
var signToken = require('../../auth/auth').signToken;


router.use(function(req, res, next) {
    console.log('Oooh, an HTTP Request occured:', req.method, req.url);
    next();
});


router.route('/')

    .get(function(req, res, next) {
        User.find({}, function(err, users) {
            if (err) {
                var error = new Error('Unable to find this page. Sorry!');
                report.status = 404;
                next(error);
            } else {
                res.status(200).json(users);
            }
        })
    })

    .post(function(req, res, next) {

        var body = req.body;

        var user = new User({
            firstname: body.firstname, 
            lastname: body.lastname,
            username: body.username,
            password: body.password
        });

        user.save(function(err) {
            if (err) {
                var error = new Error(err.message);
                error.status = 400;
                return next(error);
            }

            res.json({ message: 'User created!' });
        })

    });


router.route('/:username')

    .get(function(req, res, next) {

        User.findOne({ username: req.params.username }, function(err, user) {
            if (!user) {
                var error = new Error('404 Error: This User Does Not Exist!');
                error.status = 404;
                next(error);
            } else {
                res.status(201).json("Welcome To Your Page " + user.firstname);
            }
        })
    })

    .delete(function(req, res, next) {

        User.findOneAndRemove({ username: req.params.username }, function(err, user) {
            if (!user) {
                var error = new Error('Unable to delete this user. Sorry!');
                error.status = 404;
                next(error);
            } else {
                res.status(201).json("This User has been deleted " + user.firstname);
            }
        })
    })

    .put(function(req, res, next) {

        User.findOneAndUpdate({ username: req.params.username }, {
            $push: { "contacts": { name: req.body.name, method: req.body.method } },
            upsert: true

        }, function(err, user) {
            if (err) {
                var error = new Error('Unable to update this user. Sorry!');
                error.status = 500;
                next(error);
            } else {
                res.status(201).json(user);
            }
        });

    });


module.exports = router;

var express = require('express');
var router = express.Router();
var User = require('./user_model');

router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

router.route('/')
    .get(function(req, res) {
        User.find({}, function(error, users) {
            if (error) {
                console.log(error);
            } else {
                res.status(200).json(users);
            }
        })
    })
    .post(function(req, res) {

        var user = new User();
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.username = req.body.username;

        user.save(function(err) {

            if (err)

                console.log(err);

            res.json({ message: 'User created!' });
        });

    });

router.route('/:username')
    .get(function(req, res) {
        User.findOne({ username: req.params.username }, function(err, user) {

            if (err) {
                console.log(err);
            } else {
                res.status(201).json(user);
            }
        })
    })
    .delete(function(req, res) {
        User.remove({
            username: req.params.username
        }, function(err) {
            if (err) {
                console.log(err);
            } else {
                res.json({ message: 'User deleted!' });
            }
        })
    });


module.exports = router;

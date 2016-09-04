/* Variables and Shit */

var express = require('express');
var router = express.Router();
var User = require('./user_model');


router.use(function(req, res, next) {
    console.log(req.method, req.url);
    next();
});

/*--------------- BREAK ---------------------------- */




/* Main Page Route To Create User and Show All Users 
----------------------------------------------------*/

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
        })

    });

/*--------------- BREAK ---------------------------- */




/* Individual User Page and Delete User End Point Routes
----------------------------------------------------*/

router.route('/:username')
    .get(function(req, res) {
        User.findOne({ username: req.params.username }, function(err, user) {

            if (err) {
                console.log(err);
            } else {
                res.status(201).json("Welcome To Your Page " + user.firstname);
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
    })
    .put(function(req, res) {

        User.findOneAndUpdate({ username: req.params.username }, {
            $push: {"contacts": {name: req.body.name, method: req.body.method}},
            safe: true, upsert: true, new : true

        }, function(error, user) {
            if (error) {
                console.log(error);
            } else {
                res.status(201).json(user);
            }
        });

    });





/*--------------- BREAK ---------------------------- */





/* Exports and Shit 
---------------------------------------------------------------------*/

module.exports = router;

/*---------------THE END ---------------------------- */

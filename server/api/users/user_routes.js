/* Variables and Shit */

var express = require('express');
var router = express.Router();
var User = require('./user_model');



/*------------ ROUTER-LEVEL MIDDLEWARE --------------*/
router.use(function(req, res, next) {
    console.log('Oooh, an HTTP Request occured:', req.method, req.url);
    next();
});
/*------------------------------------------- */


/*----- NOTES
    1. Calls to next() and next(err) indicate that the current handler is complete 
    and in what state. next(err) will skip all remaining handlers in the chain except 
    for those that are set up to handle errors as described above.
    2. app.all applies to all METHODS
*/


/* Main Page Route To Create User and Show All Users 
----------------------------------------------------*/


router.route('/')
    .get(function(req, res, next) {
        User.find({}, function(err, users) {
            if (err) {
                var error = new Error('Unable to find this page. Sorry!');
                report.status = 500;           
                return next(error);
            } else {
                res.status(200).json(users);
            }
        })
    })
    .post(function(req, res, next) {

        var user = new User();
        user.firstname = req.body.firstname;
        user.lastname = req.body.lastname;
        user.username = req.body.username;

        user.save(function(err) {

            if (err) {
                var error = new Error('error occured while creating this user');
                error.status = 400;
                return next(error);
            }

            res.json({ message: 'User created!' });
        })

    });

/*--------------- BREAK ---------------------------- */




/* Individual User Page and Delete User End Point Routes
----------------------------------------------------*/

router.route('/:username')
    .get(function(req, res, next) {
        User.findOne({ username: req.params.username }, function(err, user) {
            if (!user) {
                var error = new Error('404 Error: This User Does Not Exist!');
                error.status = 404;
                return next(error);
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
                return next(error);
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
                return next(error);
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

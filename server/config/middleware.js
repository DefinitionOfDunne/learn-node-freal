var bodyParser = require('body-parser');
var express = require('express');
var err = require('./errorhandler');
var passport = require('passport');

/*--------Application-Level Middleware ---------------------------- */


module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(passport.initialize());
	app.use(passport.session()); 
	app.use(express.static('public'));
    app.use(err());
    
}

var bodyParser = require('body-parser');
var express = require('express');

/*--------Application-Level Middleware ---------------------------- */


module.exports = function(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static('../public'));

}

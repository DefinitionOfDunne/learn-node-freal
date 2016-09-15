var express = require('express');
var router = express.Router();
var app = express();
var passport = require('passport');
var verifyUser = require('../../auth/auth').verifyUser;

router.use(function(req, res, next) {
    console.log('Oooh, an HTTP Request occured:', req.method, req.url);
    next();
});

router.get('/', function(req, res){
    res.send('index');
});

module.exports = router;
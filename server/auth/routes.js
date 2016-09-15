var router = require('express').Router();
var verifyUser = require('./auth').verifyUser;
var controller = require('./controller');

router.post('/', verifyUser(), controller.signin);

module.exports = router;
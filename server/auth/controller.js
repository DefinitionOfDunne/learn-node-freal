var User = require('../api/users/user_model');
var signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
  var token = signToken(req.user._id);
  res.json({token: token});
};
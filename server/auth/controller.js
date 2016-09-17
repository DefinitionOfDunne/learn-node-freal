var User = require('../api/users/user_model');
var signToken = require('./auth').signToken;

exports.signin = function(req, res, next) {
  var token = signToken(req.user._id);
  console.log(token);
  res.status(201).json({token: token});
};

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var User = require('./api/users/user_model');

require('./config/middleware')(app);
require('./config/mongoose_connection');
require('./config/routing')(app);


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', function(req, res){
	res.json({ Header: 'Welcome To Dylans Express App' }); 
});



app.listen(8008, function(){
	console.log('Express App Running on Port 8008')
});



module.exports = app;

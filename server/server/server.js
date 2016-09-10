var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var err = require('./config/errorhandler');

require('./config/middleware')(app);
require('./config/mongoose_connection');
require('./config/routing')(app);

// Invoke error-Handling Middleware
app.use(err());
/*-------------------------------*/

app.listen(8008, function(){
	console.log('Express App Running on Port 8008')
});

module.exports = app;


var mongoose = require('mongoose');


var userSchema = mongoose.Schema({

    firstname: { 
    	type: String, 
    	required: true 
    },
    lastname: { 
    	type: String, 
    	required: true 
    },
    username: { 
    	type: String, 
    	required: true 
    },
    contacts: [{
        name: { type: String },
        method: { type: String }
    }]

});

var User = mongoose.model('User', userSchema);

module.exports = User;

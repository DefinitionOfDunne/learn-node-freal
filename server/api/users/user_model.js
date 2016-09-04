var mongoose = require('mongoose');


var userSchema = mongoose.Schema({

    firstname: String,
    lastname: String,
    username: String,
    contacts: [{
        name: { type: String },
        method: { type: String }
    }]

});

var User = mongoose.model('User', userSchema);

module.exports = User;

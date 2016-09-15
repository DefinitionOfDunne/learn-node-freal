var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var UserSchema = new Schema({

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
    password: {
        type: String,
        required: true
    },
    contacts: [{
        name: { type: String },
        method: { type: String }
    }]

});

UserSchema.pre('save', function(next) {

  if (!this.isModified('password')) return next();
  this.password = this.encryptPassword(this.password);
  next();
})


UserSchema.methods = {
  // check the passwords on signin
  authenticate: function(plainTextPword) {
    return bcrypt.compareSync(plainTextPword, this.password);
  },
  // hash the passwords
  encryptPassword: function(plainTextPword) {
    if (!plainTextPword) {
      return ''
    } else {
      var salt = bcrypt.genSaltSync(10);
      return bcrypt.hashSync(plainTextPword, salt);
    }
  }
};

module.exports = mongoose.model('User', UserSchema);
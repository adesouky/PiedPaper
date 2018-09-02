var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

var UserSchema = mongoose.Schema({
	Username: {
		type: String,
		index: true
	},
	Name: {
		type: String
	},
	Groupname: {
		type: String
	},
	Phonenumber: {
		type:String
	},
	Password: {
		type:String
	}
});

var User= module.exports = mongoose.model('User' , UserSchema);


module.exports.createUser = function(newUser, callback){
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.Password, salt, function(err, hash) {
    	newUser.Password = hash;
    	newUser.save(callback);
        // Store hash in your password DB.
    });
});
}

module.exports.getUserByUsername = function(Username, callback) {
	var un = {Username: Username};
	User.findOne(un, callback);

}

module.exports.getUserById = function(id, callback){
	User.findById(id, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
	bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    	if(err) throw err;
    	callback(null, isMatch);
	});
}
var mongoose = require('mongoose');

var classSchema = mongoose.Schema({
	Name: {
		type: String
	},
	Day: {
		type: String
	},
	time: {
		type: String
	}

});

var Class = module.exports = mongoose.model('Class' , classSchema);


// Fetch All Classes
module.exports.getClasses = function(callback, limit){
	Class.find(callback).limit(limit);
}

// Fetch Single Class
module.exports.getClassById = function(id, callback){
	Class.findById(id, callback);
}
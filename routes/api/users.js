/*
	api definition for users
*/
var util = require('util');

var users = function() {};
 
users.all = function(req,res){
		
		console.log('users.all');
		
		util.inspect(req);
		util.inspect(res);

		return res.json({user:'all-users'});
}

// get user by id
users.getById = function(req,res){
		console.log('users.getById');
		
		util.inspect(req);
		util.inspect(res);

		var userId = req.params.id || false;

		if(!userId)
			return res.json({user : 'failed getById need Id'});

		return res.json({user:userId});
}

// registering a user
users.register = function(req,res){
		console.log('users.register');
		
		util.inspect(req);
		util.inspect(res);

		return res.json({user:'registering user'});
}

// login a user
users.login = function(req,res){
		console.log('users.login');
		
		util.inspect(req);
		util.inspect(res);

		return res.json({user:'login user'});
}


module.exports = users;
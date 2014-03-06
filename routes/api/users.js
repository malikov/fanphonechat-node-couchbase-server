/*
	api definition for users
*/

var users = {
	all : function(req,res){
		
		console.log('users.all');
		
		console.log(req);
		console.log(res);

		return res.json({user:'all-users'});
	},
	getById : function(req,res){
		console.log('users.getById');
		
		console.log(req);
		console.log(res);

		var userId = req.params.id || false;

		if(!userId)
			return res.json({user : 'failed getById need Id'});

		return res.json({user:userId});
	},
	// registering a user
	register : function(req,res){
		console.log('users.register');
		
		console.log(req);
		console.log(res);

		return res.json({user:'registering user'});
	},
	login : function(req,res){
		console.log('users.login');
		
		console.log(req);
		console.log(res);

		return res.json({user:'login user'});
	}
}

module.exports = users;
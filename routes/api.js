/*
 * Serve JSON to our AngularJS client

 	All models should be loaded here since the api interacts with the database

	Api calls :

	/api/users #all users in the system
	/api/users/:id #fiter users by id
	
	/api/messages #all group by thread
	/api/messages/users/:id # all message by threads for one userid
	

 */
var users = {
	all : function(req,res){
		
		console.log('users.all');
		
		console.log(req);
		console.log(res);

		res.json({user:'all-users'});
	},
	byId : function(req,res){
		console.log('users.byUserId');
		
		console.log(req);
		console.log(res);

		var userId = req.params.id;
		res.json({userid:userId});
	},
	// registering a user
	register : function(req,res){
		console.log('users.register');
		
		console.log(req);
		console.log(res);

		res.json({user:'registering user'});
	},
	login : function(req,res){
		console.log('users.login');
		
		console.log(req);
		console.log(res);

		res.json({user:'login user'});
	}
}

var messages = {
	// get all threads
	all : function(req,res){
		console.log('messages.all');
		
		console.log(req);
		console.log(res);
	},
	// get all threads for one user
	byUserId : function(req,res){
		console.log('messages.byUserId');
		
		console.log(req);
		console.log(res);

		var userId = req.params.id;

	}

}


exports.users = users;
exports.messages = messages;

exports.default = function (req,res){
  console.log('Default entry point need to check access authorize to server');
  console.log(req);
  console.log(res);

  res.json({});
}
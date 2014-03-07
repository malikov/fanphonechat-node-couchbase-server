/*
 * Serve JSON to our AngularJS client

 	All models should be loaded here since the api interacts with the database

	Api calls :

	/api/users #all users in the system
	/api/users/:id #fiter users by id
	
	/api/messages #all group by thread
	/api/messages/users/:id # all message by threads for one userid
	

 */
var util = require('util');

exports.users = require('./users');
exports.threads = require('./threads');
exports.messages = require('./messages');

exports.default = function (req,res){
  console.log('Default entry point need to check access authorize to server');
  
  util.inspect(req);
  util.inspect(res);

  res.json({});
}
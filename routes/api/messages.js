/*
	Api definition for messages
*/
var util = require('util');

var messages = function(){};


// get all messages;
messages.all = function(req,res){
		console.log('messages.all');
		
		util.inspect(req);
		util.inspect(res);

		return res.json({messages:'all'});
}

// get message by id
messages.getById = function(req,res){
		console.log('messages.getById');
		
		util.inspect(req);
		util.inspect(res);

		var userId = req.params.id || false;

		if(!userId)
			return res.json({user : 'failed getById need Id'});

		return res.json({user:userId});
}

// get all threads for one user
messages.groupByThreads = function(req,res){
		console.log('messages.groupByThreads');
		
		util.inspect(req);
		util.inspect(res);

		
		return res.json({messages: "groupByThreads"});
}

messages.getByThread = function(req,res){
		console.log('users.getByThread');
		
		util.inspect(req);
		util.inspect(res);

		var threadId = req.params.id || false;

		if(!threadId)
			return res.json({messages : 'failed getByThread need Id'});

		return res.json({messages:threadId});
}


module.exports = messages;
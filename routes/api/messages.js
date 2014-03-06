/*
	Api definition for messages
*/

var messages = {
	// get all threads
	all : function(req,res){
		console.log('messages.all');
		
		console.log(req);
		console.log(res);

		return res.json({messages:'all'});
	},
	// get all threads for one user
	groupByThreads : function(req,res){
		console.log('messages.groupByThreads');
		
		console.log(req);
		console.log(res);

		
		return res.json({messages: "groupByThreads"});
	},
	getByThread : function(req,res){
		console.log('users.getByThread');
		
		console.log(req);
		console.log(res);

		var threadId = req.params.id || false;

		if(!threadId)
			return res.json({messages : 'failed getByThread need Id'});

		return res.json({messages:threadId});
	}

}

module.exports = messages;
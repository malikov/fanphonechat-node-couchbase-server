/*
	thread api definition
*/

var threads = {
	// get all threads
	all : function(req,res){
		console.log('threads.all');
		
		console.log(req);
		console.log(res);

		return res.json({messages:'all'});
	},
	// get all threads for one user
	groupByUser : function(req,res){
		console.log('threads.groupByUser');
		
		console.log(req);
		console.log(res);


		
	},
	getByUser : function(req, res){
		console.log('threads.getByUser');
		
		console.log(req);
		console.log(res);

		var paramId = req.params.id || null; //fetching the userid

		if(paramId === null)
			return res.json({message : 'failed request provide an Id'});

		return res.json({messageId: paramId});
	}

}

module.exports = threads;
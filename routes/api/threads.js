/*
	thread api definition
*/

var threads = {
	// get all threads
	all : function(req,res){
		console.log('threads.all');
		
		console.log(req);
		console.log(res);

		return res.json({threads:'all'});
	},
	// get all threads for one user
	groupByUsers : function(req,res){
		console.log('threads.groupByUsers');
		
		console.log(req);
		console.log(res);

		return res.json({threads:'groupByUsers'});
	},
	getByUser : function(req, res){
		console.log('threads.getByUser');
		
		console.log(req);
		console.log(res);

		var paramId = req.params.id || null; //fetching the userid

		if(paramId === null)
			return res.json({threads : 'failed request provide an Id'});

		return res.json({threads: paramId});
	}

}

module.exports = threads;
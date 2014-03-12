'use strict';

// get DB
var db = require('./db');

var userDb = function(){};

userDb.create = function(user,callback){
	var callback = callback || function(err, item){
		console.log('line 10 - models/User.js : userDb.create callback');
	}

	var userDoc = {

	}

}

userDb.findAll = function(callback){
	var callback = callback || function(err, item){
		console.log('line 16 - models/User.js : userDb.findAll callback');
	}

	
}

userDb.findById = function(userId,callback){
	var userId = userId || 0;

	var callback = callback || function(err, item){
		console.log('line 31 - models/User.js : userDb.findById callback');
	}

}

module.exports = userDb;
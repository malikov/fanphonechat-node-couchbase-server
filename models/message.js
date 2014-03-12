'use strict';

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

	return db.collection('users',collectionCb);
}

userDb.findById = function(userId,callback){
	var userId = userId || 0;

	var callback = callback || function(err, item){
		console.log('line 23 - models/User.js : userDb.findById callback');
	}

	var collectionCb = function(err, collection){
		collection.findOne({'_id':userId}).toArray(callback);
	}

	return db.collection('users',collectionCb);
}

module.exports = userDb;
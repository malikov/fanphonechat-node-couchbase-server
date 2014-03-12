'use strict';

/*
    To do setup connection to couchbase
*/

 var couchbase = require('couchbase');
 
 var dbConnectCallback = function(err){
      console.log('line 8 db.js : FanPhoneChat server connection ');
      console.log(err);
      if (err) throw err;

      console.log('line 14 db.js : FanPhoneChat server connection successful ');
 }
 
 var db = new couchbase.Connection({
        bucket: "FanPhoneChat",
        password : "",
        host: "localhost:8091"
    },dbConnectCallback);

module.exports = db;
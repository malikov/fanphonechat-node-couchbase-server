/**
 * Module dependencies
 */

var express = require('express'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');

var app = module.exports = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

console.log('-------- Module dependecies ------------');

console.log(express);
console.log(api);
console.log(http);
console.log(path);

console.log('-------- app / server / io ------------');

console.log(app);
console.log(server);
console.log(io);

console.log('-------- Module dependecies END ------------');



/**
 * Configuration
 */

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);

// development only
if (app.get('env') === 'development') {
  app.use(express.errorHandler());
  console.log('development environment');
}

// production only
if (app.get('env') === 'production') {
  console.log('production environment');
  // TODO
};


/**
 * Routes
 */

// serve index and view partials
app.get('/', api.default);
app.get('/users', api.users.all);
app.get('/users/:id', api.users.getById);


app.get('/threads', api.threads.all); //get all threads or topic
app.get('/threads/users', api.threads.groupByUsers); //get all threads or topic grouped by users
app.get('/threads/users/:id', api.threads.getByUser); //get all thread in which users/id participated


app.get('/messages',api.messages.all);
app.get('/messages/threads',api.messages.groupByThreads); // get messages grouped by threads
app.get('/messages/threads/:threadId',api.messages.getByThread); //get all messages in thread with threadId

// Socket.io Communication
io.sockets.on('connection', require('./routes/socket'));

/**
 * Start Server
 */

server.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
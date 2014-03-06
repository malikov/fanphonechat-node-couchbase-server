/*
 * Serve content over a socket
 */

//associative sockets array for each thread 
var sockets = {};

module.exports = function (socket) {
  console.log('A connection was made');
  console.log(socket);
  
  socket.emit('send:name', {
    name: 'Bob'
  });

  setInterval(function () {
    socket.emit('send:time', {
      time: (new Date()).toString()
    });
  }, 1000);
};
var net = require('net');
var port = process.argv[2];

var padNumbers = function (num, pad) {
  // By default will return a string with 2 characters
  // if pad argument is not provided
  if (arguments.length === 1) {
    return (num < 10 ? '0' : '') + num
  }
  var result = [];
  result.push(num.toString());
  for (var i = 0; i < pad; i++) {
    result.unshift('0')
  }
  return result.join('');
};

function padWithZero (num) {
  return (num < 10 ? '0' : '') + num
}
var getDate = function () {
  var date = new Date();
  var year = date.getFullYear();
  var month = (date.getMonth() + 1); // In JavaScript month starts at 0!?!?!?
  var day = date.getDate();
  var hour = date.getHours();
  var minutes = date.getMinutes();
  return year + '-' + month + '-' + day + ' ' + padNumbers(hour) + ':' + padNumbers(minutes) + '\n';
};


var server = net.createServer(function (socket) {
  var data = getDate();
  socket.write(data);
  socket.end();
});

server.listen(port);

var http = require('http');
var fs = require('fs');
var server = http.createServer();

var port = process.argv[2];
var url = process.argv[3];
/*
  server object is an event emitter
  -- 'on'

*/

server.on('request', function (reg, resp) {
  var stream = fs.createReadStream(url,'utf-8');
   stream.pipe(resp);
});

server.listen(port);

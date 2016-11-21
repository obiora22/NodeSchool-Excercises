https://gist.github.com/joyrexus/10026630
var http = require('http');

var fs = require('fs');

// Create Transfer stream

var Transform = require('stream').Transform;
var inherits = require('util').inherits;

function toUpperCase (options) {
  Transform.call(this, options);
}

inherits(toUpperCase, Transform);

toUpperCase.prototype._transform = function (chunk, encoding, callback) {
  var str = chunk.toString().toUpperCase();
  this.push(str);
  callback();
}

var tuc = new toUpperCase();

function stringToUpperCase (str) {
  var upcase = str.split('').map(function (char) {
    return char.toUpperCase();
  });
  return upcase.join('')
}


var server = http.createServer();

server.on('request', function (req, res) {
  var result = '';
  if (req.method !== 'POST') {
    return res.end('Send me a POST request\n');
  }

  req.on('data', function(data) {
    result += data;
  }).on('end', function () {
    result = result.toUpperCase();
  }).pipe(tuc).pipe(res)

});

server.listen(process.argv[2]);

var http = require('http');
var url = process.argv[2]
http.get(url, function (response) {
  /*
    response is a readable Node stream (NS) and
    emits 3 events: 'data', 'error', and 'end'.
    You can listen for an event by calling
    'on' method on the NS.
    Note that NS emits data received in chunks;
    It can be line by line in the case of file or
    byte by byte.
  */
  response.setEncoding('utf-8')
  response.on('data', function (data) {
    console.log(data);
  })
})

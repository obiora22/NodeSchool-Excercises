var http = require('http');
var url = require('url');


var server = http.createServer();

server.on('request', function (req, res) {

  var urlObj = url.parse(req.url,true),
  pathname = urlObj.pathname,
  strtime = urlObj.query.iso,
  result;
  console.log(strtime)
  console.log(pathname)
  if (pathname === '/api/parsetime') {
    result = getTimeObject(strtime);
    console.log(result)
  } else if (pathname === '/api/unixtime') {
    result = getUnixTimestamp(strtime);
  }
  if (result) {
    console.log(JSON.stringify(result));
    res.writeHead(200,{
      'content-type': 'application/json',
    })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(400);
    res.end();
  }
});

function getTimeStamp (strtime) {
  return Date.parse(strtime) // strtime is in ISO format
}
function getUnixTimestamp (strtime) {
  return {
    unixtime: getTimeStamp(strtime)
  }
}
function getTimeObject (strtime) {
  var date = new Date(getTimeStamp(strtime));
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}
server.listen(process.argv[2]);

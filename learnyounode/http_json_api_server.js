const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  var url_obj = url.parse(req.url, true);
  var timestamp = url_obj.query.iso;
  var result = '';
  // console.log(url_obj)
  if (req.method === 'GET' ) {
    switch (url_obj.pathname) {
      case '/api/parsetime':
        result = getJsonTimeObj(timestamp)
        break;
      case '/api/unixtime':
       result = getUnixtime(timestamp);
        break;
      default:
        console.log('Send right query ...')
    }
  } 

  if (result) {
    res.writeHead(200, {'content-type': 'application/json'});
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(400);
    res.end();
  }
});

function getJsonTimeObj(time) {
  var date = new Date(time);
  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

function getUnixtime(time) {
  return {
    unixtime: Date.parse(time)
  }
}
server.listen(process.argv[2]);
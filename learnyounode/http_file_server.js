const http = require('http');
const fs = require('fs')
const port = process.argv[2];
const filePath = process.argv[3];
const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'});
  var stream = fs.createReadStream(filePath, 'utf-8');
  stream.pipe(res);
})

server.listen(process.argv[2]);
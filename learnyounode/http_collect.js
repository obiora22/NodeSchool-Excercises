const http = require('http');

http.get(process.argv[2], (response) => {
  var data = '';
  response.on('data', (chunk) => {
    data += chunk;
  });
  response.on('end', () => {
    console.log(data.length)
    console.log(data)
  })
})
const http = require('http');

http.get(process.argv[2], (res) => {
  res.on('data', (chunks) => {
    console.log(chunks.toString());
  })
})
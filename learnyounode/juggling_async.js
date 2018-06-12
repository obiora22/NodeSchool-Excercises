const http = require('http');
const urls = [process.argv[2], process.argv[3], process.argv[4]];
var results = [];
var count = urls.length;

urls.forEach((url, index) => {
  var result = '';
  http.get(url, (response) => {
    response.setEncoding('utf-8')
    response.on('data', (chunk) => {
      result += chunk
    })
    response.on('error', console.error)
    response.on('end', () => {
      results[index] = result
      count -- 
      if (count === 0) {
        results.forEach((str, index) => console.log(str))
      }
    })
    
  })
})
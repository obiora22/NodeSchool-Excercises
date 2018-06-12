const http = require('http');
const Transform = require('stream').Transform;

class toUpperCase extends Transform {
  constructor() {
    super()
  }
  _transform(chunk, encoding, callback) {
    var str = chunk.toString().toUpperCase();
    this.push(str);
    callback();
  }
}

var tuc = new toUpperCase();

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    
    var result = '';
    req.on('data', (chunk) => {
      result += chunk
    })
    .on('end', () => console.log(result))
    .pipe(tuc).pipe(res);
  }
})

server.listen(process.argv[2])
var fs = require('fs');
var buff = fs.readFileSync(process.argv[2]);

var lines = buff.toString()


console.log(lines.match(/\n/g).length);

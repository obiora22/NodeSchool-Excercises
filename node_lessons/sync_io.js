var fs = require('fs');

var data = fs.readFileSync(process.argv[2]).toString();

var new_line_count = data.match(/\n/g).length;

console.log(new_line_count);

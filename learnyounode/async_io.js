var fs = require('fs');
var file_path = process.argv[2];
fs.readFile(file_path, 'utf-8', function (err, data) {
  if (err) {
    console.log(err.code);
  }
  console.log(data.split('\n').length - 1);
})

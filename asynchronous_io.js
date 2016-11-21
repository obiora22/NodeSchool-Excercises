var fs = require('fs');

fs.readFile(process.argv[2], {encoding: 'utf-8'}, function (err, data) {
  var result = data.match(/\n/g).length;
  console.log(result);
})

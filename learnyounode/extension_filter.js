var fs = require('fs');
// use path module to access file basename and extension
var path = require('path');
// var filter = new RegExp(process.argv[3]);
var filter = '.' + process.argv[3];

fs.readdir(process.argv[2], 'utf8', function (err, dir_files) {
  if (err) {
    console.log(err);
  }

  var matched_files = dir_files.filter(function (file) {
    // return file.slice(file.length - (filter.length)) ===  filter;
    return path.posix.extname(file) === filter;
  })

  matched_files.forEach(function (file) {
    console.log(file);
  })
});

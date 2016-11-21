// Asynchronously read contents of a directory
var fs = require('fs');
var path = require('path');
// var file_ext = '.' + process.argv[3]
// var regex = new RegExp(file_ext);

// fs.readdir(process.argv[2], 'utf-8', function (err, data) {
//    result = data.filter(function (elem, index) {
//    return elem.match(regex);
//
//   });
//
//   for (var i = 0; i < result.length; i++) {
//     console.log(result[i]);
//   };
// });

// you can also use the 'path' module to access basenames and extensions for files

function filterDirectory (dir, ext, callback) {

  fs.readdir(dir, function (err, data) {
    if (err)
      return callback(err);

    // if there are no errors
    data = data.filter(function (elem, index) {
      return path.extname(elem) === "." + ext;
    });
    callback(null, data)
  });

}

module.exports = filterDirectory;

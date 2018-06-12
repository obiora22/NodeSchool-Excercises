var fs = require('fs');
var path = require('path');

module.exports = function (dir_path, ext, callback) {
  fs.readdir(dir_path,'utf-8', function (err, data) {
    if (err)
      return callback(err);

    data = data.filter(function (file) {
      return path.posix.extname(file) ===
      ext;
    })
    callback(null,data);
  });
}
